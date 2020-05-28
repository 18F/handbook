require "nokogiri"
require "test/unit"

BASEURL = "http://0.0.0.0:4000/"

class SiteTest < Test::Unit::TestCase
  def test_redirect
    dest_url = "#{BASEURL}tech-portfolio/"
    doc = File.open("_site/infrastructure/index.html") { |f| Nokogiri::HTML(f) }

    link = doc.at_css('link[rel="canonical"]')
    assert link
    assert_equal dest_url, link["href"]

    meta = doc.at_css('meta[http-equiv="refresh"]')
    assert meta
    assert meta["content"].include?("url=#{dest_url}")
  end

  def test_sitemap
    doc = File.open("_site/sitemap.xml") { |f| Nokogiri::XML(f) }

    doc.css("urlset url loc").each do |loc|
      assert loc.content.start_with?(BASEURL)
    end
  end
end
