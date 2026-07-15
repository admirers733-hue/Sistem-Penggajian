function login(){

var user=document.getElementById("username").value;

var pass=document.getElementById("password").value;

if(user=="RESINNA" && pass=="24110023"){

alert("Login Berhasil");

window.location="dashboard.html";

}else{

alert("Username atau Password Salah");

}

}

var data=[];

function tambahData(){

var nama=document.getElementById("nama").value;

var jabatan=document.getElementById("jabatan").value;

var gaji=document.getElementById("gaji").value;

data.push({

nama:nama,

jabatan:jabatan,

gaji:gaji

});

tampil();

}

function tampil(){

var tabel=document.getElementById("tabel");

tabel.innerHTML="";

for(var i=0;i<data.length;i++){

tabel.innerHTML+=

"<tr>"+
"<td>"+(i+1)+"</td>"+
"<td>"+data[i].nama+"</td>"+
"<td>"+data[i].jabatan+"</td>"+
"<td>"+data[i].gaji+"</td>"+
"<td><button onclick='hapus("+i+")'>Hapus</button></td>"+
"</tr>";

}

}

function hapus(i){

data.splice(i,1);

tampil();

}

function cariData(){

var cari=document.getElementById("cari").value.toLowerCase();

var tabel=document.getElementById("tabel");

tabel.innerHTML="";

for(var i=0;i<data.length;i++){

if(data[i].nama.toLowerCase().includes(cari)){

tabel.innerHTML+=

"<tr>"+
"<td>"+(i+1)+"</td>"+
"<td>"+data[i].nama+"</td>"+
"<td>"+data[i].jabatan+"</td>"+
"<td>"+data[i].gaji+"</td>"+
"<td><button onclick='hapus("+i+")'>Hapus</button></td>"+
"</tr>";

}

}

}