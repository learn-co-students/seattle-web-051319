class Student
    attr_reader :id
    attr_accessor :name

    def initialize(id, name)
        @id = id
        @name = name
    end

    def self.all
        sql = "SELECT * FROM students;"
        results = DB[:conn].execute(sql)

        results.map do |row|
            Student.new(row["id"], row["name"])
        end
    end

    def save
        sql = <<~SQL
            UPDATE students
            SET name = ?
            WHERE id = ?
        SQL
        DB[:conn].execute(sql, @name, @id)
    end

    def self.find_by_id(id)
        sql = <<~SQL
            SELECT * FROM students
            WHERE id = ?
        SQL
        results = DB[:conn].execute(sql, id)
        result = results.first
        Student.new(result["id"], result["name"])
    end

    def self.best_student
        sql = "SELECT students.name, courses.title, enrollments.grade_percent
        FROM enrollments
        JOIN courses ON courses.id = enrollments.course_id
        JOIN students ON students.id = enrollments.student_id
        ORDER BY grade_percent DESC
        LIMIT 1;"

        binding.pry
        results = DB[:conn].execute(sql)
        best = results.first
    end

    def to_s
        greet
    end

    def greet
        "Hello! My name is #{@name}"
    end
end