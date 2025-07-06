from flask import Flask
from config import DevelopmentConfig
from flask_cors import CORS
from .api import api


def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(DevelopmentConfig)

    app.register_blueprint(api, url_prefix='/api')

    return app