class Task
  def initialize(id, description)
    @id = id
    @description = description
  end

  def save
    sql = <<~SQL
      UPDATE checklist
      SET id = ?
      SET description = ?;
    SQL

    DB[:conn].execute(sql, @id, @description)
  end

  def to_s
    @description
  end

  def self.all
    sql = <<~SQL
      SELECT * FROM checklist;
    SQL

    results = DB[:conn].execute(sql)
    results.map do |result|
      Task.new(result["id"], result["description"])
    end
  end
end

