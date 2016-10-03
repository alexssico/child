<?php

require_once('database/Mysql.php');
require_once('database/Mysql/Exception.php');
require_once('database/Mysql/Statement.php');

// Подключение к СУБД, выбор кодировки и базы данных.
$db = Database_Mysql::create('agromark.mysql.ukraine.com.ua', 'agromark_second', 'cfpgvy3l')
           ->setCharset('utf8')
           ->setDatabaseName('agromark_second');
?>           