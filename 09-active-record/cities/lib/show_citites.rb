class CityShower
    def self.run
        City.all.each do |city|
            puts "#{city.name}, #{city.state.name}"
        end
    end
end