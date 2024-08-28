#!/usr/bin/env python3

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import re
import time

book = "matthew"

driver = webdriver.Chrome()

def parse_norm(text):
    return "<h2" + text.split("<!--[if !IE]>")[0].split("<h2")[2]

def parse_ruby(text):
    return "<h2" + text.split("<h2")[1].split("</body>")[0]

def write(file_path, content):
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

books = [
    "matthew",
    "mark",
    "luke",
    "john",
    "acts",
    "romans",
    "1corintians",
    "2corintians",
    "galatians",
    "ephesians",
    "philippians",
    "colossians",
    "1thessalonians",
    "2thessalonians",
    "1timothy",
    "2timothy",
    "titus",
    "philemon",
    "hebrews",
    "james",
    "1peter",
    "2peter",
    "1john",
    "2john",
    "3john",
    "jude",
    "revelation",
    "genesis",
    "exodus",
    "leviticus",
    "numbers",
    "deuteronomy",
    "joshua",
    "judges",
    "ruth",
    "1samuel",
    "2samuel",
    "1kings",
    "2kings",
    "1chronicles",
    "2chronicles",
    "ezra",
    "nehemiah",
    "esther",
    "job",
    "psalms",
    "proverbs",
    "ecclesiastes",
    "songofsongs",
    "isaiah",
    "jeremiah",
    "lamentations",
    "ezekiel",
    "daniel",
    "hosea",
    "joel",
    "amos",
    "obadiah",
    "jonah",
    "micah",
    "nahum",
    "habakkuk",
    "zephaniah",
    "haggai",
    "zecariah",
    "malachi"
]

for book in books:
    print(f"progress: norm: {book}")
    driver.get(f"https://archive.md/o/QzsP1/bible.salterrae.net/kougo/html/{book}.html")
    page_content = driver.page_source
    file_path    = f"templates/old/norm/{book}.htm"
    write(file_path, parse_norm(page_content))

books = [
    "matthew",
    "mark",
    "luke",
    "john",
    "acts",
    "romans",
    "1corintians",
    "2corintians",
    "galatians",
    "ephesians",
    "philippians",
    "colossians",
    "1thessalonians",
    "2thessalonians",
    "1timothy",
    "2timothy",
    "titus",
    "philemon",
    "hebrews",
    "james",
    "1peter",
    "2peter",
    "1john",
    "2john",
    "3john",
    "jude",
    "revelation",
    "genesis_12",
    "genesis_3",
    "exodus",
    "leviticus",
    "numbers",
    "deuteronomy",
    "joshua",
    "judges",
    "ruth",
    "1samuel",
    "2samuel",
    "1kings",
    "2kings",
    "1chronicles",
    "2chronicles",
    "ezra",
    "nehemiah",
    "esther",
    "job",
    "psalms_12",
    "psalms_345",
    "proverbs",
    "ecclesiastes",
    "songofsongs",
    "isaiah_1",
    "isaiah_2",
    "jeremiah_1",
    "jeremiah_2",
    "lamentations",
    "ezekiel_1",
    "ezekiel_2",
    "daniel",
    "hosea",
    "joel",
    "amos",
    "obadiah",
    "jonah",
    "micah",
    "nahum",
    "habakkuk",
    "zephaniah",
    "haggai",
    "zecariah",
    "malachi"
]

for book in books:
    print(f"progress: ruby: {book}")
    driver.get(f"https://web.archive.org/web/20221020011720/http://bible.salterrae.net/kougo/xml/{book}.xml")
    iframe = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "playback"))
    )
    driver.switch_to.frame(iframe)
    page_content = driver.page_source
    file_path    = f"templates/old/ruby/{book}.htm"
    write(file_path, parse_ruby(page_content))

print(parse_ruby(page_content))

driver.quit()

