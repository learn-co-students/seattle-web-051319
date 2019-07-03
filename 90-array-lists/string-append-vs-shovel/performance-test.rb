require 'benchmark'

iterations = 50_000
Benchmark.bmbm do |x|
  x.report('<< :') do
    s = ""
    iterations.times { s << "something " }
  end
  x.report('+= :') do
    s = ""
    iterations.times { s += "something " }
  end
end
