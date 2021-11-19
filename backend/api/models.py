from django.db import models


# Create your models here.

class Jobs(models.Model):
    name = models.CharField(max_length=30)
    reward = models.CharField(max_length=200)
    finished = models.BooleanField()
