# sudo python3 /home/ubuntu/www/tamkeen/app/manage.py runserver 0.0.0.0:80 > /dev/null 2>&1 &
sudo systemctl start nginx

sudo kill -9 $(sudo lsof -t -i:8004)
sudo uwsgi --chdir /home/ubuntu/www/nozolan/app --socket :8004 --module nozolan.wsgi > /dev/null 2>&1 &
