from django.urls import path
from .views import submit_form

"""
lw_backend/urls.py: defines url route/s for form submissions.
"""
urlpatterns = [
    path('submit-form/', submit_form, name='submit-form'),
]
