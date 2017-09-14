<?php
	header("content-type:text/html;charset=utf-8");
	$suname= $_POST["uname"];
	$spwd= $_POST["upwd"];
	//echo "<script>alert('登录成功'); </script>";
	$db= mysql_connect("localhost","root","root");
	mysql_select_db("uclass",$db);
	mysql_query("set names utf8");
	
	$sql="select * from students where uname='$suname'" ;
	
	$res=mysql_query($sql);//查询的sql语句通过该方法执行后会得到一个结果集；
	//通过mysql_fetch_array() 方法 获取结果集中的一条数据  得到的结果是一个数组
	
	$arr=mysql_fetch_array($res);//结果是一个数组array
	
	
	if($arr){
		if($spwd==$arr["upwd"]){
			echo "<script>alert('登录成功');location.href='http://www.baidu.com' </script>";
		}else{
			echo "<script>alert('密码错误');location.href='log.html' </script>";
		}
	}else{
		echo"<script>alert('用户名不存在');location.href='log.html' </script>";
	}
?>