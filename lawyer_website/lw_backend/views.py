from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Consultation

"""
This defines views for handlinf form submissions.
Maps data to corresp. React components data.
Only the POST method will be used since visitors only fill out 
a form and then submit. 
May add more fields later, just want to work out frontend-backend functionality first.
"""

@api_view(['POST'])
def submit_form(request):

    form_data = request.data
    name = form_data.get('name')
    email = form_data.get('email')
    message = form_data.get('message')

    consultation = Consultation(
            name=form_data['name'],
            email=form_data['email'],
            message=form_data['message']
        )
    consultation.save()

    print(form_data) # Check in the terminal if data is being received
    
    # For now, return a simple response
    return Response({'status': 'Form submitted', 'data': form_data})
