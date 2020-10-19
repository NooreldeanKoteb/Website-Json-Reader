import urllib.request, json
def updateUsers():
    with urllib.request.urlopen("https://dralexa2.pythonanywhere.com/patientInfo/") as url:
        users = json.loads(url.read().decode())
    return users



