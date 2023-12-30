from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'countdown/home.html')

def clock(request):
    return render(request, 'countdown/clock.html')