from django.shortcuts import render


def home(request):
    return render (request, 'index.html')

def about(request):
    return render (request, 'aboutUs.html')

def team(request):
    return render(request, 'ourTeam.html')

def contact(request):
    return render(request, 'contactUs.html')