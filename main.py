from flask import Flask, request, render_template
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

@app.route("/")
def index():
  return render_template("html/index.html")


@app.route("/operacaoV2")
def operacaoV2():
  return render_template("html/operacaoV2.html")
  

@app.route("/gravar", methods=['POST'])
def gravar():

    # Coleta das variáveis
    nomeComprador = request.form.get('nomeComprador')
    emailComprador = request.form.get('emailComprador')
    telefoneComprador = request.form.get('telefoneComprador')

    cookieTradicionalGrande = request.form.get('cookieTradicionalGrande')
    cookieTradicionalMini = request.form.get('cookieTradicionalMini')
    cookieRecheadoDoceDeLeite = request.form.get('cookieRecheadoDoceDeLeite')
    cookieRecheadoNutella = request.form.get('cookieRecheadoNutella')
    tortaDeCookieCarameloENutella = request.form.get('tortaDeCookieCarameloENutella')
    tortaDeCookieNutella = request.form.get('tortaDeCookieNutella')

    valorTotal = request.form.get('valorTotal')

    ruaEntrega = request.form.get('ruaEntrega')
    numeroEntrega = request.form.get('numeroEntrega')
    cepEntrega = request.form.get('cepEntrega')
    estadoEntrega = request.form.get('estadoEntrega')
    cidadeEntrega = request.form.get('cidadeEntrega')
    dataEntrega = request.form.get('dataEntrega')
    
    observacoes = request.form.get('observacoes')


    try:
        con = mysql.connector.connect (
        host='localhost', 
        database='databasecookies', 
        user='root', 
        password='123456'
    )

        inserir_produtos = f'INSERT INTO pedidos (nomeComprador, emailComprador, telefoneComprador, cookieTradicionalGrande, cookieTradicionalMini, cookieRecheadoDoceDeLeite, cookieRecheadoNutella, tortaDeCookieCarameloENutella, tortaDeCookieNutella, valorTotal, ruaEntrega, numeroEntrega, cepEntrega, estadoEntrega, cidadeEntrega, dataEntrega, observacoes) VALUES ("{nomeComprador}", "{emailComprador}", "{telefoneComprador}", "{cookieTradicionalGrande}", "{cookieTradicionalMini}", "{cookieRecheadoDoceDeLeite}", "{cookieRecheadoNutella}", "{tortaDeCookieCarameloENutella}", "{tortaDeCookieNutella}", "{valorTotal}", "{ruaEntrega}", "{numeroEntrega}", "{cepEntrega}", "{estadoEntrega}", "{cidadeEntrega}", "{dataEntrega}", "{observacoes}")'


        cursor = con.cursor()
        cursor.execute(inserir_produtos)
        con.commit()
        print(cursor.rowcount, "registros inseridos na tabela!")
        cursor.close()
    except Error as erro:
        print("Falha ao inserir dados no MySQL: {}".format(erro))
    finally:
        if (con.is_connected()):
            con.close()
            print("Conexão ao MySQL finalizada")

    return render_template("html/operacaoV2.html")

if __name__ == "__main__":
    app.run()