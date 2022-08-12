#!C:\Users\Kripa\AppData\Local\Microsoft\WindowsApps\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\python.exe

#importing module for cgi handling
import cgi
import html
import os #for file upload 
import cgitb

cgitb.enable()

print("content-type:text/html\n\n")

#creating instance of FieldStorage class
form=cgi.FieldStorage()

#getting data from field
fname=form.getvalue("name","No Name Entered")
Email=form.getvalue("email","No Email Entered")
psswd=form.getvalue("pswd","No Password Entered")


try:
    import msvcrt
    #set mode for stdin and stdout
    msvcrt.setmode(0,os.O_BINARY) #setting std input to 0
    msvcrt.setmode(1,os.O_BINARY) #setting std output to 1
except ImportError:
    pass


#get file from nested field storage
fileitem=form["biopic"]

#checking if valid file is uploaded
if fileitem.filename:
    #get rid of path and get filename
    imgfilename=os.path.basename(fileitem.filename)
    open("files/"+imgfilename,"wb").write(fileitem.file.read())
    msg="file was uploaded to files/"+imgfilename
else:
    msg="no file was uploaded"

#getlist method reutrns list 
emotion_list=form.getlist("emotion")
service_list=form.getlist("service")
feedback=form.getlist("comments")

#avoiding script injection, escape user input
f_name= html.escape(fname)

print("""
<html>
    <head>
        <title>CGI Assignment python</title>
    </head>
    <body>
        <div class="headerstyle">
            <h1>Hello %s!</h1>"""%(fname))
print("<p>This is your email:%s</p>"%(Email))        
print("<p> These are your currect emotions:")
for emo in emotion_list:
    print(html.escape(emo))
print("<p>This is how you feel about our service:")
for serve in service_list:
    print(html.escape(serve))
print("<p>Thank you for your feedback")

print("<p>These are your comments:%s"%(feedback))
print("<p>Image file details:%s"%(msg))
print("""</div>
</body>
</html>
""")