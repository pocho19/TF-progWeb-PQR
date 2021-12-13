from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.models import Jobs
from api.serializers import JobSerializer, RegisterSerializer, MeSerializer


class JobViewSet(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    queryset = Jobs.objects.all()

    def get_queryset(self):
        queryset = self.queryset
        name = self.request.query_params.get('name')
        reward = self.request.query_params.get('reward')
        if name is not None:
            queryset = queryset.filter(name=name)
        if reward is not None:
            if reward == "alto":
                queryset = queryset.filter(reward__gt=1000)
            elif reward == "medio":
                queryset = queryset.filter(reward__lte=1000).filter(reward__gt=100)
            elif reward == "bajo":
                queryset = queryset.filter(reward__lte=100)
        return queryset


class JobFinishedViewSet(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    queryset = Jobs.objects.filter(finished=True)


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me(request):
    return Response(MeSerializer(request.user).data, 200)
