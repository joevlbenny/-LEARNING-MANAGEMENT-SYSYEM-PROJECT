from django.db import models

#Teacher Model
class Teacher(models.Model):
    fullname=models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    qualification=models.CharField(max_length=100)
    mobileno=models.CharField(max_length=100)
    skills=models.TextField()

class CourseCategory(models.Model):
    title=models.CharField(max_length=100)
    description=models.TextField()

    class Meta:
        verbose_name_plural='Course Categories'

    def __str__(self) :
        return self.title  

class Course(models.Model):
    category=models.ForeignKey(CourseCategory,on_delete=models.CASCADE)
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE)
    description=models.CharField(max_length=150)
    title=models.CharField(max_length=100)
    featuredimage=models.ImageField(upload_to='course_images/',null=True)
    technologies=models.TextField(null=True)
class Student(models.Model):
    fullname=models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    age=models.CharField(max_length=100)  
    interests=models.TextField()

class StudentAssignments(models.Model):
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,null=True)
    student = models.ForeignKey(Student,on_delete=models.CASCADE,null=True)
    title=models.CharField(max_length=200)
    detail=models.TextField(max_length=100,null=True)  
    add_time=models.DateField(auto_now_add=True) 


    def __str__(self) :
        return f"{self.title}"    

    class Meta:
        verbose_name_plural='Student Assignments'


