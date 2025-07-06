from flask import Blueprint, jsonify, request
import pyttsx3

api = Blueprint('__main__', __name__)

@api.route("/status")
def status():
    return jsonify({"status": "running"})

@api.route("/text-to-speech", methods=['GET', 'POST'])
def text_to_speech():
    text = request.args.get('text')

    speech_model = pyttsx3.init()
    speech_model.say(text)
    speech_model.runAndWait()
    return text