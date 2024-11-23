from flask import request, jsonify
from config import app, db
from models import Todo

@app.route("/tasks", methods=["GET"])
def get_tasks():
    tasks = Todo.query.all()
    json_tasks = list(map(lambda task: task.to_json(), tasks))
    return jsonify({"tasks": json_tasks})

@app.route("/create_task", methods=["POST"])
def create_task():
    date = request.json.get("date")
    task = request.json.get("task")

    if not date or not task:
        return (jsonify({"msg": "You must include date and task"}), 400)
    
    new_task = Todo(date=date, task=task)

    try:
        db.session.add(new_task)
        db.session.commit()
    except Exception as e:
        return jsonify({"msg": str(e)}, 400)
    
    return jsonify({"msg": "Task created successfully"}, 201)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)