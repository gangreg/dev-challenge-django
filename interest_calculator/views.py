import json
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt

from .serializer import CalculateSerializer

class CalculateView(APIView):

    @csrf_exempt
    def post(self, request):
        serializer = CalculateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        return Response({'result': 1000})
