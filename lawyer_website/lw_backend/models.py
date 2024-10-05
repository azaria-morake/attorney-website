from django.db import models

class Consultation(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    phone = models.CharField(max_length=15, blank=True, null=True)


    def __str__(self):
        return self.name
