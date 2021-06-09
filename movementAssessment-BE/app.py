from flask import Flask, request, redirect
from flask_restful import Resource, Api
import os
import re

app = Flask(__name__)
api = Api(app)

class Test(Resource):
    def get(self):
        return 'Welcome to, NITAGMA API!'
    
    def post(self):
        try:
            value = request.get_json()
            if(value):
                return {'Post Values': value}, 201
            
            return {"error":"Invalid format."}
            
        except Exception as error:
            return {'error': error}

class Multi(Resource):
    def get(self, num):
        return {'Result':num*10}

api.add_resource(Test,'/')
api.add_resource(Multi,'/multi/<int:num>')

if __name__ == '__main__':
    app.run(debug=True)
