#!/usr/bin/env ruby
require_relative '../config/environment'

def main
  sql = <<-SQL
  SELECT name, title, grade_percent
  FROM enrollments
  JOIN students
  ON enrollments.student_id = students.id
  JOIN courses
  ON enrollments.course_id = courses.id
  SQL

  students = Student.all
  courses = Course.all
  enrollments = Enrollment.all
  puts students

  Student.find_by_id 1
end