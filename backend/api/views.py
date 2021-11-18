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


class JobFinishedViewSet(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    queryset = Jobs.objects.filer(finished=True)


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me(request):
    return Response(MeSerializer(request.user).data, 200)
