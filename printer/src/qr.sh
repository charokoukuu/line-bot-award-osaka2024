ip_address=$(ip a | awk '/inet /{print $2}' | awk -F/ 'NR==2{print $1}')
python3 /home/kiosk/RunTicket/printer/src/qr.py "$ip_address"