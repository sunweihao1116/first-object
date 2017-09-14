<?php
	header("content-type:text/html;charset=utf-8");
	$suname= $_POST["uname"];
	$spwd= $_POST["upwd"];
	//连接数据源；
	$db=mysql_connect("localhost","root","root");
	
	//打开数据源；
	mysql_select_db("uclass",$db);
	
	//设置字符编码；
	mysql_query("set names utf8");
	
	//编写sql语句；
	$sql="insert into students(uname,upwd) values ('$suname','$spwd')";
	
	//执行sql语句；
	$res=mysql_query($sql);
	if($res){
		echo"<script>alert('注册成功了')</script>";
	}else{
		echo"<script>alert('注册失败了')</script>";
	}
?>