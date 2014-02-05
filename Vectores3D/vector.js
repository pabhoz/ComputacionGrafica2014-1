var Vec3 = function( x, y, z ) {
        this.set( x, y||x, z||x );
        this.dCos = new Array();
    };

 Vec3.prototype = {
        set: function( x, y, z ) {
            this.x = x;
            this.y = y || x;
            this.z = z || x;
            return this;
        },
        module: function(){
            return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)+Math.pow(this.z,2));
        },
        direction: function(){
            var cosenos = new Array();
            var modulo = this.module();
            cosenos[0] = (Math.acos(this.x/modulo)*180)/Math.PI;
            cosenos[1] = (Math.acos(this.y/modulo)*180)/Math.PI;
            cosenos[2] = (Math.acos(this.z/modulo)*180)/Math.PI;
            return cosenos;
        }
};

var v = new Vec3(4,5,3);
var u = new Vec3(5);
document.write("Modulo de v: "+v.module()+" modulo de u :"+u.module());
document.write('</br>');
document.write("Dirección de v: "+v.direction()+" Dirección de u : "+u.direction());