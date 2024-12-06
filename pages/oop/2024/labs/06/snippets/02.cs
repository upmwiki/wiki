using System;

abstract class AccessHandler {
    protected AccessHandler NextHandler;
    public void SetNext(AccessHandler handler) {
        NextHandler = handler;
    }
    public abstract bool HandleRequest(string user, string resource);
}

class LevelAccessHandler : AccessHandler {
    public override bool HandleRequest(string user, string resource) {
        if (user == "Admin" || user == "User") {
            Console.WriteLine("Access Level Check: Passed");
            return NextHandler?.HandleRequest(user, resource) ?? true;
        }
        Console.WriteLine("Access Level Check: Failed");
        return false;
    }
}

class TokenHandler : AccessHandler {
    public override bool HandleRequest(string user, string resource) {
        if (user == "Admin") {
            Console.WriteLine("Token Check: Valid");
            return NextHandler?.HandleRequest(user, resource) ?? true;
        }
        Console.WriteLine("Token Check: Invalid");
        return false;
    }
}

class ResourceHandler : AccessHandler {
    public override bool HandleRequest(string user, string resource) {
        if (resource == "File") {
            Console.WriteLine("Resource Check: Passed");
            return true;
        }
        Console.WriteLine("Resource Check: Failed");
        return false;
    }
}

class Program {
    static void Main() {
        var levelHandler = new LevelAccessHandler();
        var tokenHandler = new TokenHandler();
        var resourceHandler = new ResourceHandler();
        levelHandler.SetNext(tokenHandler);
        tokenHandler.SetNext(resourceHandler);
        string user = "Admin";
        string resource = "File";
        Console.WriteLine($"Processing access for {user} to {resource}:");
        if (levelHandler.HandleRequest(user, resource)) {
            Console.WriteLine("Access Granted.");
        } else {
            Console.WriteLine("Access Denied.");
        }
    }
}