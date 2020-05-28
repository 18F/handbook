require "nokogiri"
require "test/unit"

class SiteTest < Test::Unit::TestCase
  def test_redirect
    dest = "/tech-portfolio/"
    doc = File.open("_site/infrastructure/index.html") { |f| Nokogiri::HTML(f) }

    link = doc.at_css('link[rel="canonical"]')
    assert link
    assert link["href"].include?(dest)

    meta = doc.at_css('meta[http-equiv="refresh"]')
    assert meta
    assert meta["content"].include?(dest)
  end

  def test_sitemap
    doc = File.open("_site/sitemap.xml") { |f| Nokogiri::XML(f) }

    doc.css("urlset url loc").each do |loc|
      assert loc.content.start_with?("http")
    end
  end
end
