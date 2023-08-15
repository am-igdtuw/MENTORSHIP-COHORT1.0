from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import os

options=Options()
option.add_argument("--window-size=1920,1080")
driver=webdriver.Chrome(options=options)
driver.get("https://www.youtube.com/")