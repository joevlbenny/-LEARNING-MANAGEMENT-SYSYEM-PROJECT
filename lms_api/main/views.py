from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import TeacherSerializer,CategorySerializer,CourseSerializer,StudentAssignmentsSerializer,StudentSerializer
from django.http import JsonResponse,HttpResponse
from django.views.decorators.csrf import csrf_exempt
# from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import generics
from .import models
from django.http import JsonResponse


class TeacherList(generics.ListCreateAPIView):
    queryset=models.Teacher.objects.all()
    serializer_class=TeacherSerializer
    # permission_classes=[permissions.IsAuthenticated]

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Teacher.objects.all()
    serializer_class=TeacherSerializer  
    # permission_classes=[permissions.IsAuthenticated]  


# @csrf_exempt
# def teacher_login(request):
    
#     email=request.POST['email']
#     password=request.POST['password']
#     teacherData=models.Teacher.objects.get(email=email,password=password)
#     if teacherData:
#         return JsonResponse({'bool':True})
#     else:
#         return JsonResponse({'bool':False})



@csrf_exempt
def teacher_login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        print(email)
        
        if email and password:
            try:
                teacher_data = models.Teacher.objects.get(email=email, password=password)
                return JsonResponse({'bool': True})
            except models.Teacher.DoesNotExist:
                return JsonResponse({'bool': False})
        else:
            return JsonResponse({'error': 'Email and password are required.'}, status=400)
    else:
        # Handling other request methods (e.g., GET)
        return JsonResponse({'error': 'Only POST requests are allowed.'}, status=405)



class CategoryList(generics.ListCreateAPIView):
    queryset=models.CourseCategory.objects.all()
    serializer_class=CategorySerializer

class CourseList(generics.ListCreateAPIView):
    queryset=models.Course.objects.all()
    serializer_class=CourseSerializer    

class AssignmentList(generics.ListCreateAPIView):
    queryset=models.StudentAssignments.objects.all()
    serializer_class=StudentAssignmentsSerializer 


    # def get_queryset(self):
    #     student_id=models.Student.objects.get(pk=student_id)
    #     teacher_id=models.Teacher.objects.get(pk=teacher_id)

    #     return  models.StudentAssignments.objects.filter(student=student,teacher=teacher) 


class StudentList(generics.ListCreateAPIView):
    queryset=models.Student.objects.all()
    serializer_class=StudentSerializer    
    def get_queryset(self):
        studentid=self.kwargs.get('studentid')
        teacherid=self.kwargs.get('teacherid')
        student=models.Student.objects.get(pk=studentid)
        teacher=models.Teacher.objects.get(pk=teacherid)
        return models.StudentAssignments.objects.filter(student=student,teacher=teacher)    
 
