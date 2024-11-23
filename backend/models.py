from config import db

class Todo(db.Model):
    id = db.Column(db.Integer, primasryu_key=True) #Unique
    date = db.Column(db.String(80), unique=False, nullable=False)
    task = db.Column(db.String(80), unique=False, nullable=False)

    # API will req and res JSON
    def to_json(self):
        return {
            "id": self.id,
            "date": self.date,
            "task": self.task
        }