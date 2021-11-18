from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from api.views import JobViewSet, JobFinishedViewSet, RegisterView, me

router = routers.DefaultRouter()
router.register(r'jobs', JobViewSet)
router.register(r'jobs_finished', JobFinishedViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view()),
    path('me/', me),

]