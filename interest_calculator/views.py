import json
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt

from .serializer import CalculateSerializer
from .services import calculate_interest_over_50_years

class CalculateView(APIView):

    @csrf_exempt
    def post(self, request):
        serializer = CalculateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = calculate_interest_over_50_years(
                serializer.validated_data.get('savingsAmount'),
                serializer.validated_data.get('monthlySavings'),
                serializer.validated_data.get('payoutFrequency'),
                serializer.validated_data.get('interestRate'),
            )
        return Response({'result': data})
