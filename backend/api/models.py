from django.db import models


# Create your models here.

class Jobs(models.Model):
    name = models.TextField(default="")
    reward = models.TextField(default=0)
    finished = models.BooleanField(default=False)
