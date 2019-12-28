require "nokogiri"
require "set"
require "uri"

def homepage_links
  doc = File.open("_site/index.html") { |f| Nokogiri::HTML(f) }
  links = doc.css(".layout-table-of-contents a")
  paths = links.map { |l| l["href"] }
  paths = paths.reject { |path| path.start_with?("http") }
  paths.map { |path| URI::parse(path).path.gsub(/^\/|\/$/, "") }.to_set
end

def redirect?(path)
  doc = File.open(path) { |f| Nokogiri::HTML(f) }
  doc.css("meta[http-equiv=\"refresh\"]").any?
end

def rendered_pages
  pages = Dir.glob("_site/*/index.html")
  pages = pages.reject { |pg| redirect?(pg) }
  pages.map { |pg| pg.split("/")[1] }
end

# Travel pages are deeply nested, so ignore those. Intro pages are linked from the onboarding guide.
pages = rendered_pages.reject{ |pg| pg.match?(/travel|intro-to/) }.to_set

stranded_pages = pages - homepage_links
puts stranded_pages.to_a.sort
