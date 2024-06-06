from flask import Flask, render_template
# from flask_sqlalchemy import SQLAlchemy
from fake_database import list_product

import datetime



app = Flask(__name__)


@app.route('/')
def home():
    data = datetime.datetime.now()
    return render_template('home.html', list_product=list_product, data= data)

@app.route('/email')
def gmail():
    #  Precisa pegar do form os dados para envio
    # nome, email e mensagem
    pass 

if __name__ == "__main__":
    app.run(debug=True)
