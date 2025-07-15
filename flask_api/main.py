from flask import Flask, jsonify, make_response, request
from bd import Formulario

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False

@app.route('/formulario', methods=['GET'])
def get_formulario():
    return make_response(
        jsonify(
            message="Lista de formulários",
            dados=Formulario
        )
    )

@app.route('/formulario', methods=['POST'])
def create_formulario():
    formulario = request.json
    # funcao de listas
    Formulario.append(formulario)
    return make_response(
        jsonify(
            message="Formulário adicionado com sucesso",
            dados=formulario
        ) 
    )

@app.route('/formulario/<int:id>', methods=['PATCH'])
def atualizar_status(id):
    novo_status = request.json.get("status")
    if not novo_status:
        return make_response(jsonify(message="Campo 'status' é obrigatório"))

    for formulario in Formulario:
        if formulario["id"] == id:
            formulario["status"] = novo_status
            return make_response(
                jsonify(
                    message="Status atualizado com sucesso",
                    dados=formulario
                )
            )

    return make_response(jsonify(message="Formulário não encontrado"))


app.run()