// Vector Library -= {
var Vector = function(){
    this.args = arguments;
    
    this.dimension = function() {
        return this.args.length;
    };
    this.x = function(){
        return this.args[0];
    };
    this.y = function(){
        return this.args[1];
    };
    this.z = function(){
        return this.args[2];
    };
    this.w = function(){
        return this.args[3];
    };
    this.r = function(){
        return this.args[0];
    };
    this.g = function(){
        return this.args[1];
    };
    this.b = function(){
        return this.args[2];
    };
    this.a = function(){
        return this.args[3];
    };
    this.magnitude = function(){
        return Math.sqrt(Vector.dot(this, this));
    };
    this.normalized = function(){
        return Vector.normalize(this);
    };
    
    this.add = function(v) {
        this.args = Vector.add(this, v).args;
    };
    this.subtract = function(v) {
        this.args = Vector.subtract(this, v).args;
    };
    this.multiply = function(v) {
        this.args = Vector.multiply(this, v).args;
    };
    this.divide = function(v) {
        this.args = Vector.divide(this, v).args;
    };
    this.scale = function(s) {
        this.args = Vector.scale(this, s).args;
    };
    this.dot = function(v) {
        this.args = Vector.dot(this, v).args;
    };
    this.cross3D = function(v) {
        this.args = Vector.cross3D(this, v).args;
    };
    this.applyFunction = function(f) {
        this.args = Vector.applyFunction(this, f).args;
    };
    this.set = function(){
        this.args = arguments;
    };
};
Vector.largest = function() {
    var largest = Vector.fromDimension(0);
    for(var i = 0;i < arguments.length;i++){
        var item = arguments[i];
        
        if(item.dimension() > largest.dimension()){
            largest = item;
        }
    }
    
    return largest;
};
Vector.fromDimension = function(dim) {
    var v = new Vector(0);
    v.args = Array(dim).fill(0);
    
    return v;
};
Vector.clone = function(v) {
    var n = new Vector();
    n.args = v.args;
    
    return n;
};
Vector.add = function(v1, v2) {
    var largest = Vector.largest(v1, v2);
    var result = Vector.fromDimension(largest.dimension());
    for(var i = 0;i < largest.dimension();i++){
        result.args[i] = (v1.args[i]||0) + (v2.args[i]||0);
    }
    
    return result;
};
Vector.subtract = function(v1, v2) {
    var largest = Vector.largest(v1, v2);
    var result = Vector.fromDimension(largest.dimension());
    for(var i = 0;i < largest.dimension();i++){
        result.args[i] = (v1.args[i]||0) - (v2.args[i]||0);
    }
    
    return result;
};
Vector.multiply = function(v1, v2) {
    var largest = Vector.largest(v1, v2);
    var result = Vector.fromDimension(largest.dimension());
    for(var i = 0;i < largest.dimension();i++){
        result.args[i] = (v1.args[i]||0) * (v2.args[i]||0);
    }
    
    return result;
};
Vector.divide = function(v1, v2) {
    var largest = Vector.largest(v1, v2);
    var result = Vector.fromDimension(largest.dimension());
    for(var i = 0;i < largest.dimension();i++){
        result.args[i] = (v1.args[i]||0) / (v2.args[i]||0);
    }
    
    return result;
};
Vector.applyFunction = function(v, f) {
    var result = Vector.clone(v);
      
    for(var i = 0;i < result.dimension;i++){
        result.args[i] = f(result.args[i]);
    }
      
    return result;
};
Vector.scale = function(v, s) {
    var result = Vector.clone(v);
    for(var i = 0;i < result.dimension();i++){
        result.args[i] *= s;
    }
    
    return result;
};
Vector.dot = function(v1, v2) {
    var result = 0;
    var largest = Vector.largest(v1, v2);
    
    for(var i = 0;i < largest.dimension();i++){
        result += (v1.args[i]||0) * (v2.args[i]||0);
    }
    
    return result;
};
Vector.cross3D = function(v1, v2) {
    return new Vector(
        v1.y() * v2.z() - v1.z() * v2.y(),
        v1.z() * v2.x() - v1.x() * v2.z(),
        v1.x() * v2.y() - v1.y() * v2.x()
    );
};
Vector.normalize = function(v){
    if(!v.magnitude()){
        println(new Error("Magnitude cannot be zero!"));
    }
    return Vector.scale(v, 1/v.magnitude());
};
//}
