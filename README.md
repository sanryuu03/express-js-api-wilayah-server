This is a [express.js](https://expressjs.com/) with [`typescript`](https://www.typescriptlang.org/).

# SQL WILAYAH Provinsi

- create table provinsi

      CREATE TABLE indonesia_provinces (
      id INT NOT NULL AUTO_INCREMENT,
      code VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      PRIMARY KEY(id)
      ) ENGINE = INNODB;

- create table provinsi with index

      CREATE TABLE indonesia_provinces(
      id INT NOT NULL AUTO_INCREMENT,
      code VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      PRIMARY KEY(id),
      INDEX code_index(code)
      ) ENGINE = INNODB;

- insert (split) data ke table provinsi

      INSERT INTO indonesia_provinces (code, name)
      SELECT kode, nama
      FROM wilayah
      WHERE length(kode) = 2;

- create table kabupaten/kota

      CREATE TABLE indonesia_cities(
      id INT NOT NULL AUTO_INCREMENT,
      province_code VARCHAR(255) NOT NULL,
      code VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      PRIMARY KEY(id)
      ) ENGINE = INNODB;

- create table kabupaten/kota with index

      CREATE TABLE indonesia_cities(
      id INT NOT NULL AUTO_INCREMENT,
      province_code VARCHAR(255) NOT NULL,
      code VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      PRIMARY KEY(id),
      INDEX province_code_index(province_code),
      INDEX code_index(code)
      ) ENGINE = INNODB;

- insert (split) data ke table kabupaten/kota

      INSERT INTO indonesia_cities(province_code, code, name)
      SELECT SUBSTRING(kode, 1, 2) AS province_code, kode, nama
      FROM wilayah
      WHERE LENGTH(kode) = 5;

- create table kecamatan

      CREATE TABLE indonesia_districts(
      id INT NOT NULL AUTO_INCREMENT,
      city_code VARCHAR(255) NOT NULL,
      code VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      PRIMARY KEY(id)
      ) ENGINE = INNODB;

- create table kecamatan with index

      CREATE TABLE indonesia_districts(
      id INT NOT NULL AUTO_INCREMENT,
      city_code VARCHAR(255) NOT NULL,
      code VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      PRIMARY KEY(id),
      INDEX city_code_index(city_code),
      INDEX code_index(code)
      ) ENGINE = INNODB;

- insert (split) data ke table kecamatan

      INSERT INTO indonesia_districts (city_code, code, name)
      SELECT SUBSTRING(kode, 1, 5) AS city_code, kode, nama
      FROM wilayah
      WHERE length(kode) = 8;

- create table kelurahan/desa

      CREATE TABLE indonesia_villages(
      id INT NOT NULL AUTO_INCREMENT,
      district_code VARCHAR(255) NOT NULL,
      code VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      PRIMARY KEY(id)
      ) ENGINE = INNODB;

- create table kelurahan/desa with index

      CREATE TABLE indonesia_villages(
      id INT NOT NULL AUTO_INCREMENT,
      district_code VARCHAR(255) NOT NULL,
      code VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      PRIMARY KEY(id),
      INDEX district_code_index(district_code),
      INDEX code_index(code)
      ) ENGINE = INNODB;

- insert (split) data ke table kelurahan/desa

      INSERT INTO indonesia_villages (district_code, code, name)
      SELECT SUBSTRING(kode, 1, 8) AS district_code, kode, nama
      FROM wilayah
      WHERE length(kode) = 13;

## Referensi

- database Referensi : https://github.com/cahyadsn/wilayah
- query split data : https://github.com/cahyadsn/wilayah/pull/21/commits/8e1da2c89e8fb0f0652d81b40edbcfdd6fc76ca3

## Penggunaan

- allProvinces

      www.domainanda.com/api/v1/master/provinces

- allCities

      www.domainanda.com/api/v1/master/regency

- allDistricts

      www.domainanda.com/api/v1/master/district

- allVillages

      www.domainanda.com/api/v1/master/village

- get filtered provinces

      www.domainanda.com/api/v1/master/provinces/:code/name

- get filtered regency

      www.domainanda.com/api/v1/master/regency/fromProvince/:id
      www.domainanda.com/api/v1/master/regency/:code/name

- get filtered district

      www.domainanda.com/api/v1/master/village/fromRegency/:id
      www.domainanda.com/api/v1/master/village/:code/name

- get filtered village

      www.domainanda.com/api/v1/master/village/fromDistrict/:id
      www.domainanda.com/api/v1/master/village/:code/name

## Penting

- nama database bisa kalian sesuaikan pada folder config/db.ts atau file ".env"
- versi sequelize akan selalu di update

## Informasi

- API ini saya buat menggunakan express.js + typescript + sequelize (v6) + MySQL
- database aslinya hanya 1 file yaitu "wilayah.sql", saya split untuk mempermudah query
- database bisa kalian lihat pada folder "backupDB"
- pada folder "backupDB" terdapat 2 folder yaitu "split data" dan "split data with index" yang memiliki struktur table berbeda
- pada folder "split data" merupakan hasil backup DB yang struktur tabel tidak memiliki index
- pada folder "split data with index" merupakan hasil backup DB yang struktur tabel memiliki index

## Donasi

- untuk donasi ke pak cahya (source db wilayah.sql) bisa menuju link ini https://github.com/cahyadsn/wilayah

- jika kalian suka dengan projek saya dan ingin support saya, bisa donasi via transfer
  - Jago/Jago Syariah bank digital 5055-6459-9169
