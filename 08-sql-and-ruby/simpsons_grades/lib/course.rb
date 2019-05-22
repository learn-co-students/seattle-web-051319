class Course
    attr_reader :title

    def initialize(title)
        @title = title
    end

    def self.all
        sql = "SELECT * FROM courses;"
        results = DB[:conn].execute(sql)

        results.map do |row|
            Course.new(row["title"])
        end
    end
end