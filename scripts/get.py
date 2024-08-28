#!/usr/bin/env python3

from selenium import webdriver
import time
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

driver.get("https://archive.md/2013.05.02-115858/http://bible.salterrae.net/kougo/html/")

element = driver.find_element(By.XPATH, '//*[@id="CONTENT"]/div[1]/div/div/ul[1]/li[1]/a')
element.click()

page_content = driver.page_source

file_path = "template/old/norm"

with open(file_path, 'w', encoding='utf-8') as file:
    file.write(page_content)

time.sleep(1000)
driver.quit()
