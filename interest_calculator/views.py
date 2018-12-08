import json
from rest_framework.views import APIView
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt

from .serializer import CalculateSerializer

class CalculateView(APIView):

    @csrf_exempt
    def post(self, request):
        serializer = CalculateSerializer(data=json.loads(request.body))
        serializer.is_valid(raise_exception=True)

        return JsonResponse({'result': 1000})