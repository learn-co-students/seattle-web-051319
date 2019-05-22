class Enrollment
    attr_reader :student, :course_id, :percent_grade

    def initialize(student, course_id, percent_grade)
        @student = student
        @course_id = course_id
        @percent_grade = percent_grade
    end

    def self.all
        sql = "SELECT * FROM enrollments;"
        results = DB[:conn].execute(sql)

        results.map do |row|
            student_id = row["student_id"]
            course_id = row["course_id"]
            percent_grade = row["grade_percent"]

            student = Student.find_by_id(student_id)
            Enrollment.new(student, course_id, percent_grade)
        end
    end
end