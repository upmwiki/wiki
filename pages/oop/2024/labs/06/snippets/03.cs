using System;
using System.Collections.Generic;

// Memento для хранения состояния текста
class TextMemento {
    public string State { get; }
    public TextMemento(string state) {
        State = state;
    }
}

// Класс текстового редактора
class TextEditor {
    private string _text;
    public void Write(string text) {
        _text += text;
    }
    public string GetText() {
        return _text;
    }
    public TextMemento Save() {
        return new TextMemento(_text);
    }
    public void Restore(TextMemento memento) {
        _text = memento.State;
    }
}

// Класс для управления историей изменений
class History {
    private Stack<TextMemento> _mementos = new Stack<TextMemento>();
    public void Save(TextMemento memento) {
        _mementos.Push(memento);
    }
    public TextMemento Undo() {
        return _mementos.Count > 0 ? _mementos.Pop() : null;
    }
}

class Program {
    static void Main() {
        var editor = new TextEditor();
        var history = new History();
        editor.Write("Hello");
        history.Save(editor.Save());
        editor.Write(", World!");
        history.Save(editor.Save());
        Console.WriteLine($"Current Text: {editor.GetText()}");
        editor.Restore(history.Undo());
        Console.WriteLine($"After Undo: {editor.GetText()}");
        editor.Restore(history.Undo());
        Console.WriteLine($"After Another Undo: {editor.GetText()}");
    }
}