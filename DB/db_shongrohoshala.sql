-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2016 at 01:40 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_shongrohoshala`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `rootcat_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `subcat_id` int(11) NOT NULL,
  `pro_type` int(11) NOT NULL,
  `title` text CHARACTER SET utf8 NOT NULL,
  `pcode` varchar(100) NOT NULL,
  `editor` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` float(11,2) NOT NULL,
  `discount` varchar(200) NOT NULL,
  `discount_price` float(11,2) NOT NULL,
  `image` varchar(200) NOT NULL,
  `weight` varchar(100) NOT NULL,
  `subject` text CHARACTER SET utf8 NOT NULL,
  `availability` text NOT NULL,
  `noofpage` text NOT NULL,
  `publisher` int(11) NOT NULL,
  `edition` text CHARACTER SET utf8 NOT NULL,
  `country` varchar(200) NOT NULL,
  `language` text NOT NULL,
  `book_summary` longtext CHARACTER SET utf8 NOT NULL,
  `terms_condition` varchar(250) NOT NULL,
  `date` varchar(200) NOT NULL,
  `date_time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `rootcat_id`, `cat_id`, `subcat_id`, `pro_type`, `title`, `pcode`, `editor`, `quantity`, `price`, `discount`, `discount_price`, `image`, `weight`, `subject`, `availability`, `noofpage`, `publisher`, `edition`, `country`, `language`, `book_summary`, `terms_condition`, `date`, `date_time`) VALUES
(1, 6, 13, 12, 7, 'Rosra Golden Black Analog Watch', '311', 0, 11, 2222.00, '', 0.00, '8763.jpg', '120 gm', '', '', '', 0, '', '', '', 'As a youth I ogled over the department store watch counter in my local mall and bought a Movado Olympian with museum dial in the mid-1990s. Oh, how I loved that watch. My wife married me anyway, and from her experience in non-profit fundraising she taught me to read a man by the watch he wears. So began my education and current enjoyment of your column. ', '', '', ''),
(2, 6, 13, 12, 7, 'Diver Steel Wrist shot', '312', 0, 3, 2345.00, '', 0.00, '4340.jpg', '120 gm', '', '', '', 0, '', '', '', 'As a youth I ogled over the department store watch counter in my local mall and bought a Movado Olympian with museum dial in the mid-1990s. Oh, how I loved that watch. My wife married me anyway, and from her experience in non-profit fundraising she taught me to read a man by the watch he wears. So began my education and current enjoyment of your column. ', '', '', ''),
(3, 6, 13, 12, 7, 'cartier drive', '312', 0, 4, 3300.00, '', 0.00, '1234.jpg', '120 gm', '', '', '', 0, '', '', '', 'have a milestone birthday approaching, and it occurred to me that I do not have a gold watch. I admit to the irrational allure of a gold watch, even though itâ€™s neither as practical nor as versatile as stainless steel. ', '', '', ''),
(4, 6, 13, 12, 7, 'watch forums', '114', 0, 3, 2444.00, '', 0.00, '1522.jpg', '120 gm', '', '', '', 0, '', '', '', 'Well, it is a quandary, and no mistake. If you look at it purely from a financial perspective, there is no doubt that you can get what many would agree is a finer watch for the same money if you choose to wear something in steel rather than gold, and there are many younger gentlemen who feel that gold is simply too old-fashioned â€“ something that only a crabbed curmudgeon afflicted in years (like, say, the Watch Snob) would wear. However, like so many either-or problems, what we have here is really a false dichotomy.', '', '', ''),
(6, 6, 13, 10, 8, 'T-Shirts Designs Collection For Mens', '111', 0, 11, 200.00, '', 0.00, '1596.jpg', 'L Size', '', '', '', 0, '', '', '', 'Menâ€™s Watches, Bata Shoes, Girls Shoes, Women Shoes, Stylish Women Shoes, Grey Wedding Suits, Men Wedding Suits, Women Wedding Suits, Bridal Dresses, Summer Dresses, Winter Dresses, Long Sleeve Dress, Prom Dress, Gold Dress, T-Shirts, Polo T-Shirts, Handbags, Women Handbags, Wedding Handbags, School Bags, Wallpapers, Celebrities Biography.', '', '', ''),
(7, 6, 13, 10, 8, 'T-Shirts Designs Collection For Mens', '112', 0, 0, 550.00, '', 0.00, '3679.jpg', 'L Size', '', '', '', 0, '', '', '', 'T-Shirts Designs Collection For Menâ€™s\r\n\r\nin different Styles, Trends, Colors and Designs. So here you can also with your loved friends and family members and easily download by just one clicking on picture. If you can like our article or post please share in social media on the below share buttons, Polo Shirts For Women, Beautiful Women Polo Shirts, Women Shirts, Sport Shirts, T-Shirts, Women T-Shirts, Long Sleeve T-Shirts, Crew Neck T-Shirts,', '', '', ''),
(8, 6, 13, 10, 8, 'T-Shirts Designs Collection For Mens', '113', 0, 0, 450.00, '', 0.00, '6241.jpg', 'L Size', '', '', '', 0, '', '', '', 'T-Shirts Designs Collection For Menâ€™s\r\n\r\nin different Styles, Trends, Colors and Designs. So here you can also with your loved friends and family members and easily download by just one clicking on picture. If you can like our article or post please share in social media on the below share buttons, Polo Shirts For Women, Beautiful Women Polo Shirts, Women Shirts, Sport Shirts, T-Shirts, Women T-Shirts, Long Sleeve T-Shirts, Crew Neck T-Shirts,', '', '', ''),
(9, 6, 13, 10, 8, 'T-Shirts Designs Collection For Mens', '114', 0, 0, 681.00, '', 0.00, '7545.jpg', 'L Size', '', '', '', 0, '', '', '', 'T-Shirts Designs Collection For Menâ€™s\r\n\r\nin different Styles, Trends, Colors and Designs. So here you can also with your loved friends and family members and easily download by just one clicking on picture. If you can like our article or post please share in social media on the below share buttons, Polo Shirts For Women, Beautiful Women Polo Shirts, Women Shirts, Sport Shirts, T-Shirts, Women T-Shirts, Long Sleeve T-Shirts, Crew Neck T-Shirts,', '', '', ''),
(10, 1, 2, 13, 8, 'IndusDiva Yellow Kanjeevaram Silk Saree Handloom Saree', '411', 0, 0, 3300.00, '', 0.00, '3072.jpg', '400 gm', '', '', '', 0, '', '', '', 'Wonderful within the vibrant colorations of daylight this yellow Natural Kanjeevaram silk handloom saree is fantastically crafted with zari and resham buttas scattered at the frame and with floral motifs woven in gold and silver zari at the distinction blue colour pallu. The saree is trimmed with a silver zari border with blue spotlight and finished with a yellow shirt piece. Concerning the Weave: The arena well known Kanjeevaram Natural silk sarees had been and at all times can be a prized heirloom. Theyâ€™re hand woven in wealthy mulberry silk interlaced with difficult and grand Natural zari brocaded motifs.', '', '', ''),
(11, 1, 2, 13, 8, 'Kanjeevaram Silk Saree Handloom Saree', '412', 0, 0, 3300.00, '', 0.00, '8084.jpg', '400 gm', '', '', '', 0, '', '', '', 'Wonderful within the vibrant colorations of daylight this yellow Natural Kanjeevaram silk handloom saree is fantastically crafted with zari and resham buttas scattered at the frame and with floral motifs woven in gold and silver zari at the distinction blue colour pallu. The saree is trimmed with a silver zari border with blue spotlight and finished with a yellow shirt piece. Concerning the Weave: The arena well known Kanjeevaram Natural silk sarees had been and at all times can be a prized heirloom. Theyâ€™re hand woven in wealthy mulberry silk interlaced with difficult and grand Natural zari brocaded motifs. Those sarees are will have to have to your wedding ceremony trousseau. Approximately us: Weâ€™re dedicated to curate the most productive and craft probably the most trendy of Indian Ethnic Put on, entwining stories of tradition and couture, materials and fables, weaves and whims to grace the Diva in you.\r\none hundred% Natural silk\r\nAuthentic handloom saree', '', '', ''),
(12, 1, 2, 13, 8, 'Kanjeevaram Silk Saree', '413', 0, 0, 3300.00, '', 0.00, '9917.jpg', '510gm', '', '', '', 0, '', '', '', ' Those sarees are will have to have to your wedding ceremony trousseau. Approximately us: Weâ€™re dedicated to curate the most productive and craft probably the most trendy of Indian Ethnic Put on, entwining stories of tradition and couture, materials and fables, weaves and whims to grace the Diva in you.\r\none hundred% Natural silk\r\nAuthentic handloom saree\r\nWeave Sort: Kanjeevaram Silk Saree\r\nSaree Duration: 6.25 meters, Saree Width: 44 inches\r\nWith shirt piece', '', '', ''),
(13, 1, 2, 13, 8, 'Kanjeevaram Silk Saree', '414', 0, 0, 3300.00, '', 0.00, '6502.jpg', '510gm', '', '', '', 0, '', '', '', 'with a yellow shirt piece. Concerning the Weave: The arena well known Kanjeevaram Natural silk sarees had been and at all times can be a prized heirloom. Theyâ€™re hand woven in wealthy mulberry silk interlaced with difficult and grand Natural zari brocaded motifs. Those sarees are will have to have to your wedding ceremony trousseau. Approximately us: Weâ€™re dedicated to curate the most productive and craft probably the most trendy of Indian Ethnic Put on, entwining stories of tradition and couture, materials and fables, weaves and whims to grace the Diva in you.\r\none hundred% Natural silk\r\nAuthentic handloom saree\r\nWeave Sort: Kanjeevaram Silk Saree\r\nSaree Duration: 6.25 meters, Saree Width: 44 inches\r\nWith shirt piece', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `root_cat_id` int(12) NOT NULL,
  `cat_name` text CHARACTER SET utf8 NOT NULL,
  `status` varchar(50) NOT NULL,
  `date` varchar(100) NOT NULL,
  `date_time` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `root_cat_id`, `cat_name`, `status`, `date`, `date_time`) VALUES
(1, 1, 'Hair Treatment', 'Yes', '2016-07-25', '2016-07-25 05:17:02'),
(2, 1, 'Clothing', 'Yes', '2016-07-25', '2016-07-25 05:17:47'),
(3, 1, 'Facials', 'Yes', '2016-07-25', '2016-07-25 05:18:13'),
(4, 1, 'Cream', 'Yes', '2016-07-25', '2016-07-25 05:18:34'),
(5, 1, 'Toothpaste', 'Yes', '2016-07-25', '2016-07-25 05:19:31'),
(6, 1, 'Soap', 'Yes', '2016-07-25', '2016-07-25 05:19:51'),
(13, 6, 'Fashion', 'Yes', '2016-08-23', '2016-08-23 12:19:54');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `code` char(2) NOT NULL COMMENT 'Two-letter country code (ISO 3166-1 alpha-2)',
  `name` varchar(255) NOT NULL COMMENT 'English country name',
  `full_name` varchar(255) NOT NULL COMMENT 'Full English country name',
  `iso3` char(3) NOT NULL COMMENT 'Three-letter country code (ISO 3166-1 alpha-3)',
  `number` smallint(3) UNSIGNED ZEROFILL NOT NULL COMMENT 'Three-digit country number (ISO 3166-1 numeric)',
  `continent_code` char(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`code`, `name`, `full_name`, `iso3`, `number`, `continent_code`) VALUES
('AD', 'Andorra', 'Principality of Andorra', 'AND', 020, 'EU'),
('AE', 'United Arab Emirates', 'United Arab Emirates', 'ARE', 784, 'AS'),
('AF', 'Afghanistan', 'Islamic Republic of Afghanistan', 'AFG', 004, 'AS'),
('AG', 'Antigua and Barbuda', 'Antigua and Barbuda', 'ATG', 028, 'NA'),
('AI', 'Anguilla', 'Anguilla', 'AIA', 660, 'NA'),
('AL', 'Albania', 'Republic of Albania', 'ALB', 008, 'EU'),
('AM', 'Armenia', 'Republic of Armenia', 'ARM', 051, 'AS'),
('AO', 'Angola', 'Republic of Angola', 'AGO', 024, 'AF'),
('AQ', 'Antarctica', 'Antarctica (the territory South of 60 deg S)', 'ATA', 010, 'AN'),
('AR', 'Argentina', 'Argentine Republic', 'ARG', 032, 'SA'),
('AS', 'American Samoa', 'American Samoa', 'ASM', 016, 'OC'),
('AT', 'Austria', 'Republic of Austria', 'AUT', 040, 'EU'),
('AU', 'Australia', 'Commonwealth of Australia', 'AUS', 036, 'OC'),
('AW', 'Aruba', 'Aruba', 'ABW', 533, 'NA'),
('AX', 'Åland Islands', 'Åland Islands', 'ALA', 248, 'EU'),
('AZ', 'Azerbaijan', 'Republic of Azerbaijan', 'AZE', 031, 'AS'),
('BA', 'Bosnia and Herzegovina', 'Bosnia and Herzegovina', 'BIH', 070, 'EU'),
('BB', 'Barbados', 'Barbados', 'BRB', 052, 'NA'),
('BD', 'Bangladesh', 'People''s Republic of Bangladesh', 'BGD', 050, 'AS'),
('BE', 'Belgium', 'Kingdom of Belgium', 'BEL', 056, 'EU'),
('BF', 'Burkina Faso', 'Burkina Faso', 'BFA', 854, 'AF'),
('BG', 'Bulgaria', 'Republic of Bulgaria', 'BGR', 100, 'EU'),
('BH', 'Bahrain', 'Kingdom of Bahrain', 'BHR', 048, 'AS'),
('BI', 'Burundi', 'Republic of Burundi', 'BDI', 108, 'AF'),
('BJ', 'Benin', 'Republic of Benin', 'BEN', 204, 'AF'),
('BL', 'Saint Barthélemy', 'Saint Barthélemy', 'BLM', 652, 'NA'),
('BM', 'Bermuda', 'Bermuda', 'BMU', 060, 'NA'),
('BN', 'Brunei Darussalam', 'Brunei Darussalam', 'BRN', 096, 'AS'),
('BO', 'Bolivia', 'Plurinational State of Bolivia', 'BOL', 068, 'SA'),
('BQ', 'Bonaire, Sint Eustatius and Saba', 'Bonaire, Sint Eustatius and Saba', 'BES', 535, 'NA'),
('BR', 'Brazil', 'Federative Republic of Brazil', 'BRA', 076, 'SA'),
('BS', 'Bahamas', 'Commonwealth of the Bahamas', 'BHS', 044, 'NA'),
('BT', 'Bhutan', 'Kingdom of Bhutan', 'BTN', 064, 'AS'),
('BV', 'Bouvet Island (Bouvetoya)', 'Bouvet Island (Bouvetoya)', 'BVT', 074, 'AN'),
('BW', 'Botswana', 'Republic of Botswana', 'BWA', 072, 'AF'),
('BY', 'Belarus', 'Republic of Belarus', 'BLR', 112, 'EU'),
('BZ', 'Belize', 'Belize', 'BLZ', 084, 'NA'),
('CA', 'Canada', 'Canada', 'CAN', 124, 'NA'),
('CC', 'Cocos (Keeling) Islands', 'Cocos (Keeling) Islands', 'CCK', 166, 'AS'),
('CD', 'Congo', 'Democratic Republic of the Congo', 'COD', 180, 'AF'),
('CF', 'Central African Republic', 'Central African Republic', 'CAF', 140, 'AF'),
('CG', 'Congo', 'Republic of the Congo', 'COG', 178, 'AF'),
('CH', 'Switzerland', 'Swiss Confederation', 'CHE', 756, 'EU'),
('CI', 'Cote d''Ivoire', 'Republic of Cote d''Ivoire', 'CIV', 384, 'AF'),
('CK', 'Cook Islands', 'Cook Islands', 'COK', 184, 'OC'),
('CL', 'Chile', 'Republic of Chile', 'CHL', 152, 'SA'),
('CM', 'Cameroon', 'Republic of Cameroon', 'CMR', 120, 'AF'),
('CN', 'China', 'People''s Republic of China', 'CHN', 156, 'AS'),
('CO', 'Colombia', 'Republic of Colombia', 'COL', 170, 'SA'),
('CR', 'Costa Rica', 'Republic of Costa Rica', 'CRI', 188, 'NA'),
('CU', 'Cuba', 'Republic of Cuba', 'CUB', 192, 'NA'),
('CV', 'Cape Verde', 'Republic of Cape Verde', 'CPV', 132, 'AF'),
('CW', 'Curaçao', 'Curaçao', 'CUW', 531, 'NA'),
('CX', 'Christmas Island', 'Christmas Island', 'CXR', 162, 'AS'),
('CY', 'Cyprus', 'Republic of Cyprus', 'CYP', 196, 'AS'),
('CZ', 'Czech Republic', 'Czech Republic', 'CZE', 203, 'EU'),
('DE', 'Germany', 'Federal Republic of Germany', 'DEU', 276, 'EU'),
('DJ', 'Djibouti', 'Republic of Djibouti', 'DJI', 262, 'AF'),
('DK', 'Denmark', 'Kingdom of Denmark', 'DNK', 208, 'EU'),
('DM', 'Dominica', 'Commonwealth of Dominica', 'DMA', 212, 'NA'),
('DO', 'Dominican Republic', 'Dominican Republic', 'DOM', 214, 'NA'),
('DZ', 'Algeria', 'People''s Democratic Republic of Algeria', 'DZA', 012, 'AF'),
('EC', 'Ecuador', 'Republic of Ecuador', 'ECU', 218, 'SA'),
('EE', 'Estonia', 'Republic of Estonia', 'EST', 233, 'EU'),
('EG', 'Egypt', 'Arab Republic of Egypt', 'EGY', 818, 'AF'),
('EH', 'Western Sahara', 'Western Sahara', 'ESH', 732, 'AF'),
('ER', 'Eritrea', 'State of Eritrea', 'ERI', 232, 'AF'),
('ES', 'Spain', 'Kingdom of Spain', 'ESP', 724, 'EU'),
('ET', 'Ethiopia', 'Federal Democratic Republic of Ethiopia', 'ETH', 231, 'AF'),
('FI', 'Finland', 'Republic of Finland', 'FIN', 246, 'EU'),
('FJ', 'Fiji', 'Republic of Fiji', 'FJI', 242, 'OC'),
('FK', 'Falkland Islands (Malvinas)', 'Falkland Islands (Malvinas)', 'FLK', 238, 'SA'),
('FM', 'Micronesia', 'Federated States of Micronesia', 'FSM', 583, 'OC'),
('FO', 'Faroe Islands', 'Faroe Islands', 'FRO', 234, 'EU'),
('FR', 'France', 'French Republic', 'FRA', 250, 'EU'),
('GA', 'Gabon', 'Gabonese Republic', 'GAB', 266, 'AF'),
('GB', 'United Kingdom of Great Britain & Northern Ireland', 'United Kingdom of Great Britain & Northern Ireland', 'GBR', 826, 'EU'),
('GD', 'Grenada', 'Grenada', 'GRD', 308, 'NA'),
('GE', 'Georgia', 'Georgia', 'GEO', 268, 'AS'),
('GF', 'French Guiana', 'French Guiana', 'GUF', 254, 'SA'),
('GG', 'Guernsey', 'Bailiwick of Guernsey', 'GGY', 831, 'EU'),
('GH', 'Ghana', 'Republic of Ghana', 'GHA', 288, 'AF'),
('GI', 'Gibraltar', 'Gibraltar', 'GIB', 292, 'EU'),
('GL', 'Greenland', 'Greenland', 'GRL', 304, 'NA'),
('GM', 'Gambia', 'Republic of the Gambia', 'GMB', 270, 'AF'),
('GN', 'Guinea', 'Republic of Guinea', 'GIN', 324, 'AF'),
('GP', 'Guadeloupe', 'Guadeloupe', 'GLP', 312, 'NA'),
('GQ', 'Equatorial Guinea', 'Republic of Equatorial Guinea', 'GNQ', 226, 'AF'),
('GR', 'Greece', 'Hellenic Republic Greece', 'GRC', 300, 'EU'),
('GS', 'South Georgia and the South Sandwich Islands', 'South Georgia and the South Sandwich Islands', 'SGS', 239, 'AN'),
('GT', 'Guatemala', 'Republic of Guatemala', 'GTM', 320, 'NA'),
('GU', 'Guam', 'Guam', 'GUM', 316, 'OC'),
('GW', 'Guinea-Bissau', 'Republic of Guinea-Bissau', 'GNB', 624, 'AF'),
('GY', 'Guyana', 'Co-operative Republic of Guyana', 'GUY', 328, 'SA'),
('HK', 'Hong Kong', 'Hong Kong Special Administrative Region of China', 'HKG', 344, 'AS'),
('HM', 'Heard Island and McDonald Islands', 'Heard Island and McDonald Islands', 'HMD', 334, 'AN'),
('HN', 'Honduras', 'Republic of Honduras', 'HND', 340, 'NA'),
('HR', 'Croatia', 'Republic of Croatia', 'HRV', 191, 'EU'),
('HT', 'Haiti', 'Republic of Haiti', 'HTI', 332, 'NA'),
('HU', 'Hungary', 'Hungary', 'HUN', 348, 'EU'),
('ID', 'Indonesia', 'Republic of Indonesia', 'IDN', 360, 'AS'),
('IE', 'Ireland', 'Ireland', 'IRL', 372, 'EU'),
('IL', 'Israel', 'State of Israel', 'ISR', 376, 'AS'),
('IM', 'Isle of Man', 'Isle of Man', 'IMN', 833, 'EU'),
('IN', 'India', 'Republic of India', 'IND', 356, 'AS'),
('IO', 'British Indian Ocean Territory (Chagos Archipelago)', 'British Indian Ocean Territory (Chagos Archipelago)', 'IOT', 086, 'AS'),
('IQ', 'Iraq', 'Republic of Iraq', 'IRQ', 368, 'AS'),
('IR', 'Iran', 'Islamic Republic of Iran', 'IRN', 364, 'AS'),
('IS', 'Iceland', 'Republic of Iceland', 'ISL', 352, 'EU'),
('IT', 'Italy', 'Italian Republic', 'ITA', 380, 'EU'),
('JE', 'Jersey', 'Bailiwick of Jersey', 'JEY', 832, 'EU'),
('JM', 'Jamaica', 'Jamaica', 'JAM', 388, 'NA'),
('JO', 'Jordan', 'Hashemite Kingdom of Jordan', 'JOR', 400, 'AS'),
('JP', 'Japan', 'Japan', 'JPN', 392, 'AS'),
('KE', 'Kenya', 'Republic of Kenya', 'KEN', 404, 'AF'),
('KG', 'Kyrgyz Republic', 'Kyrgyz Republic', 'KGZ', 417, 'AS'),
('KH', 'Cambodia', 'Kingdom of Cambodia', 'KHM', 116, 'AS'),
('KI', 'Kiribati', 'Republic of Kiribati', 'KIR', 296, 'OC'),
('KM', 'Comoros', 'Union of the Comoros', 'COM', 174, 'AF'),
('KN', 'Saint Kitts and Nevis', 'Federation of Saint Kitts and Nevis', 'KNA', 659, 'NA'),
('KP', 'Korea', 'Democratic People''s Republic of Korea', 'PRK', 408, 'AS'),
('KR', 'Korea', 'Republic of Korea', 'KOR', 410, 'AS'),
('KW', 'Kuwait', 'State of Kuwait', 'KWT', 414, 'AS'),
('KY', 'Cayman Islands', 'Cayman Islands', 'CYM', 136, 'NA'),
('KZ', 'Kazakhstan', 'Republic of Kazakhstan', 'KAZ', 398, 'AS'),
('LA', 'Lao People''s Democratic Republic', 'Lao People''s Democratic Republic', 'LAO', 418, 'AS'),
('LB', 'Lebanon', 'Lebanese Republic', 'LBN', 422, 'AS'),
('LC', 'Saint Lucia', 'Saint Lucia', 'LCA', 662, 'NA'),
('LI', 'Liechtenstein', 'Principality of Liechtenstein', 'LIE', 438, 'EU'),
('LK', 'Sri Lanka', 'Democratic Socialist Republic of Sri Lanka', 'LKA', 144, 'AS'),
('LR', 'Liberia', 'Republic of Liberia', 'LBR', 430, 'AF'),
('LS', 'Lesotho', 'Kingdom of Lesotho', 'LSO', 426, 'AF'),
('LT', 'Lithuania', 'Republic of Lithuania', 'LTU', 440, 'EU'),
('LU', 'Luxembourg', 'Grand Duchy of Luxembourg', 'LUX', 442, 'EU'),
('LV', 'Latvia', 'Republic of Latvia', 'LVA', 428, 'EU'),
('LY', 'Libya', 'Libya', 'LBY', 434, 'AF'),
('MA', 'Morocco', 'Kingdom of Morocco', 'MAR', 504, 'AF'),
('MC', 'Monaco', 'Principality of Monaco', 'MCO', 492, 'EU'),
('MD', 'Moldova', 'Republic of Moldova', 'MDA', 498, 'EU'),
('ME', 'Montenegro', 'Montenegro', 'MNE', 499, 'EU'),
('MF', 'Saint Martin', 'Saint Martin (French part)', 'MAF', 663, 'NA'),
('MG', 'Madagascar', 'Republic of Madagascar', 'MDG', 450, 'AF'),
('MH', 'Marshall Islands', 'Republic of the Marshall Islands', 'MHL', 584, 'OC'),
('MK', 'Macedonia', 'Republic of Macedonia', 'MKD', 807, 'EU'),
('ML', 'Mali', 'Republic of Mali', 'MLI', 466, 'AF'),
('MM', 'Myanmar', 'Republic of the Union of Myanmar', 'MMR', 104, 'AS'),
('MN', 'Mongolia', 'Mongolia', 'MNG', 496, 'AS'),
('MO', 'Macao', 'Macao Special Administrative Region of China', 'MAC', 446, 'AS'),
('MP', 'Northern Mariana Islands', 'Commonwealth of the Northern Mariana Islands', 'MNP', 580, 'OC'),
('MQ', 'Martinique', 'Martinique', 'MTQ', 474, 'NA'),
('MR', 'Mauritania', 'Islamic Republic of Mauritania', 'MRT', 478, 'AF'),
('MS', 'Montserrat', 'Montserrat', 'MSR', 500, 'NA'),
('MT', 'Malta', 'Republic of Malta', 'MLT', 470, 'EU'),
('MU', 'Mauritius', 'Republic of Mauritius', 'MUS', 480, 'AF'),
('MV', 'Maldives', 'Republic of Maldives', 'MDV', 462, 'AS'),
('MW', 'Malawi', 'Republic of Malawi', 'MWI', 454, 'AF'),
('MX', 'Mexico', 'United Mexican States', 'MEX', 484, 'NA'),
('MY', 'Malaysia', 'Malaysia', 'MYS', 458, 'AS'),
('MZ', 'Mozambique', 'Republic of Mozambique', 'MOZ', 508, 'AF'),
('NA', 'Namibia', 'Republic of Namibia', 'NAM', 516, 'AF'),
('NC', 'New Caledonia', 'New Caledonia', 'NCL', 540, 'OC'),
('NE', 'Niger', 'Republic of Niger', 'NER', 562, 'AF'),
('NF', 'Norfolk Island', 'Norfolk Island', 'NFK', 574, 'OC'),
('NG', 'Nigeria', 'Federal Republic of Nigeria', 'NGA', 566, 'AF'),
('NI', 'Nicaragua', 'Republic of Nicaragua', 'NIC', 558, 'NA'),
('NL', 'Netherlands', 'Kingdom of the Netherlands', 'NLD', 528, 'EU'),
('NO', 'Norway', 'Kingdom of Norway', 'NOR', 578, 'EU'),
('NP', 'Nepal', 'Federal Democratic Republic of Nepal', 'NPL', 524, 'AS'),
('NR', 'Nauru', 'Republic of Nauru', 'NRU', 520, 'OC'),
('NU', 'Niue', 'Niue', 'NIU', 570, 'OC'),
('NZ', 'New Zealand', 'New Zealand', 'NZL', 554, 'OC'),
('OM', 'Oman', 'Sultanate of Oman', 'OMN', 512, 'AS'),
('PA', 'Panama', 'Republic of Panama', 'PAN', 591, 'NA'),
('PE', 'Peru', 'Republic of Peru', 'PER', 604, 'SA'),
('PF', 'French Polynesia', 'French Polynesia', 'PYF', 258, 'OC'),
('PG', 'Papua New Guinea', 'Independent State of Papua New Guinea', 'PNG', 598, 'OC'),
('PH', 'Philippines', 'Republic of the Philippines', 'PHL', 608, 'AS'),
('PK', 'Pakistan', 'Islamic Republic of Pakistan', 'PAK', 586, 'AS'),
('PL', 'Poland', 'Republic of Poland', 'POL', 616, 'EU'),
('PM', 'Saint Pierre and Miquelon', 'Saint Pierre and Miquelon', 'SPM', 666, 'NA'),
('PN', 'Pitcairn Islands', 'Pitcairn Islands', 'PCN', 612, 'OC'),
('PR', 'Puerto Rico', 'Commonwealth of Puerto Rico', 'PRI', 630, 'NA'),
('PS', 'Palestinian Territory', 'Occupied Palestinian Territory', 'PSE', 275, 'AS'),
('PT', 'Portugal', 'Portuguese Republic', 'PRT', 620, 'EU'),
('PW', 'Palau', 'Republic of Palau', 'PLW', 585, 'OC'),
('PY', 'Paraguay', 'Republic of Paraguay', 'PRY', 600, 'SA'),
('QA', 'Qatar', 'State of Qatar', 'QAT', 634, 'AS'),
('RE', 'Réunion', 'Réunion', 'REU', 638, 'AF'),
('RO', 'Romania', 'Romania', 'ROU', 642, 'EU'),
('RS', 'Serbia', 'Republic of Serbia', 'SRB', 688, 'EU'),
('RU', 'Russian Federation', 'Russian Federation', 'RUS', 643, 'EU'),
('RW', 'Rwanda', 'Republic of Rwanda', 'RWA', 646, 'AF'),
('SA', 'Saudi Arabia', 'Kingdom of Saudi Arabia', 'SAU', 682, 'AS'),
('SB', 'Solomon Islands', 'Solomon Islands', 'SLB', 090, 'OC'),
('SC', 'Seychelles', 'Republic of Seychelles', 'SYC', 690, 'AF'),
('SD', 'Sudan', 'Republic of Sudan', 'SDN', 729, 'AF'),
('SE', 'Sweden', 'Kingdom of Sweden', 'SWE', 752, 'EU'),
('SG', 'Singapore', 'Republic of Singapore', 'SGP', 702, 'AS'),
('SH', 'Saint Helena, Ascension and Tristan da Cunha', 'Saint Helena, Ascension and Tristan da Cunha', 'SHN', 654, 'AF'),
('SI', 'Slovenia', 'Republic of Slovenia', 'SVN', 705, 'EU'),
('SJ', 'Svalbard & Jan Mayen Islands', 'Svalbard & Jan Mayen Islands', 'SJM', 744, 'EU'),
('SK', 'Slovakia (Slovak Republic)', 'Slovakia (Slovak Republic)', 'SVK', 703, 'EU'),
('SL', 'Sierra Leone', 'Republic of Sierra Leone', 'SLE', 694, 'AF'),
('SM', 'San Marino', 'Republic of San Marino', 'SMR', 674, 'EU'),
('SN', 'Senegal', 'Republic of Senegal', 'SEN', 686, 'AF'),
('SO', 'Somalia', 'Somali Republic', 'SOM', 706, 'AF'),
('SR', 'Suriname', 'Republic of Suriname', 'SUR', 740, 'SA'),
('SS', 'South Sudan', 'Republic of South Sudan', 'SSD', 728, 'AF'),
('ST', 'Sao Tome and Principe', 'Democratic Republic of Sao Tome and Principe', 'STP', 678, 'AF'),
('SV', 'El Salvador', 'Republic of El Salvador', 'SLV', 222, 'NA'),
('SX', 'Sint Maarten (Dutch part)', 'Sint Maarten (Dutch part)', 'SXM', 534, 'NA'),
('SY', 'Syrian Arab Republic', 'Syrian Arab Republic', 'SYR', 760, 'AS'),
('SZ', 'Swaziland', 'Kingdom of Swaziland', 'SWZ', 748, 'AF'),
('TC', 'Turks and Caicos Islands', 'Turks and Caicos Islands', 'TCA', 796, 'NA'),
('TD', 'Chad', 'Republic of Chad', 'TCD', 148, 'AF'),
('TF', 'French Southern Territories', 'French Southern Territories', 'ATF', 260, 'AN'),
('TG', 'Togo', 'Togolese Republic', 'TGO', 768, 'AF'),
('TH', 'Thailand', 'Kingdom of Thailand', 'THA', 764, 'AS'),
('TJ', 'Tajikistan', 'Republic of Tajikistan', 'TJK', 762, 'AS'),
('TK', 'Tokelau', 'Tokelau', 'TKL', 772, 'OC'),
('TL', 'Timor-Leste', 'Democratic Republic of Timor-Leste', 'TLS', 626, 'AS'),
('TM', 'Turkmenistan', 'Turkmenistan', 'TKM', 795, 'AS'),
('TN', 'Tunisia', 'Tunisian Republic', 'TUN', 788, 'AF'),
('TO', 'Tonga', 'Kingdom of Tonga', 'TON', 776, 'OC'),
('TR', 'Turkey', 'Republic of Turkey', 'TUR', 792, 'AS'),
('TT', 'Trinidad and Tobago', 'Republic of Trinidad and Tobago', 'TTO', 780, 'NA'),
('TV', 'Tuvalu', 'Tuvalu', 'TUV', 798, 'OC'),
('TW', 'Taiwan', 'Taiwan, Province of China', 'TWN', 158, 'AS'),
('TZ', 'Tanzania', 'United Republic of Tanzania', 'TZA', 834, 'AF'),
('UA', 'Ukraine', 'Ukraine', 'UKR', 804, 'EU'),
('UG', 'Uganda', 'Republic of Uganda', 'UGA', 800, 'AF'),
('UM', 'United States Minor Outlying Islands', 'United States Minor Outlying Islands', 'UMI', 581, 'OC'),
('US', 'United States of America', 'United States of America', 'USA', 840, 'NA'),
('UY', 'Uruguay', 'Eastern Republic of Uruguay', 'URY', 858, 'SA'),
('UZ', 'Uzbekistan', 'Republic of Uzbekistan', 'UZB', 860, 'AS'),
('VA', 'Holy See (Vatican City State)', 'Holy See (Vatican City State)', 'VAT', 336, 'EU'),
('VC', 'Saint Vincent and the Grenadines', 'Saint Vincent and the Grenadines', 'VCT', 670, 'NA'),
('VE', 'Venezuela', 'Bolivarian Republic of Venezuela', 'VEN', 862, 'SA'),
('VG', 'British Virgin Islands', 'British Virgin Islands', 'VGB', 092, 'NA'),
('VI', 'United States Virgin Islands', 'United States Virgin Islands', 'VIR', 850, 'NA'),
('VN', 'Vietnam', 'Socialist Republic of Vietnam', 'VNM', 704, 'AS'),
('VU', 'Vanuatu', 'Republic of Vanuatu', 'VUT', 548, 'OC'),
('WF', 'Wallis and Futuna', 'Wallis and Futuna', 'WLF', 876, 'OC'),
('WS', 'Samoa', 'Independent State of Samoa', 'WSM', 882, 'OC'),
('YE', 'Yemen', 'Yemen', 'YEM', 887, 'AS'),
('YT', 'Mayotte', 'Mayotte', 'MYT', 175, 'AF'),
('ZA', 'South Africa', 'Republic of South Africa', 'ZAF', 710, 'AF'),
('ZM', 'Zambia', 'Republic of Zambia', 'ZMB', 894, 'AF'),
('ZW', 'Zimbabwe', 'Republic of Zimbabwe', 'ZWE', 716, 'AF');

-- --------------------------------------------------------

--
-- Table structure for table `image_product`
--

CREATE TABLE `image_product` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `photo` text NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `image_product`
--

INSERT INTO `image_product` (`id`, `product_id`, `photo`, `status`) VALUES
(1, 1, '3745.jpg', 0),
(2, 1, '9403.jpg', 0),
(3, 2, '2887.jpg', 0),
(4, 2, '7625.jpg', 0),
(5, 3, '4500.jpg', 0),
(6, 3, '5273.jpg', 0),
(7, 4, '5177.jpg', 0),
(8, 4, '4521.jpg', 0),
(9, 5, '6651.jpg', 0),
(10, 5, '4807.jpg', 0),
(11, 6, '8994.jpg', 0),
(12, 6, '1934.jpg', 0),
(13, 7, '6970.jpg', 0),
(14, 7, '2129.jpg', 0),
(15, 8, '1211.jpg', 0),
(16, 8, '7235.jpg', 0),
(17, 9, '3484.jpg', 0),
(18, 9, '5681.jpg', 0),
(19, 10, '8406.jpg', 0),
(20, 10, '2384.jpg', 0),
(21, 11, '5371.jpg', 0),
(22, 11, '1803.jpg', 0),
(23, 12, '7584.jpg', 0),
(24, 12, '6959.jpg', 0),
(25, 13, '4934.jpg', 0),
(26, 13, '2691.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `producttype`
--

CREATE TABLE `producttype` (
  `id` int(11) NOT NULL,
  `typename` text CHARACTER SET utf8 NOT NULL,
  `status` varchar(50) NOT NULL,
  `date` varchar(200) NOT NULL,
  `date_time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `producttype`
--

INSERT INTO `producttype` (`id`, `typename`, `status`, `date`, `date_time`) VALUES
(7, 'Fashion Watch', 'Yes', '2016-08-23', '2016-08-23 12:23:54'),
(8, 'Clothing', 'Yes', '2016-08-23', '2016-08-23 12:24:05');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `fullname` varchar(200) CHARACTER SET utf8 NOT NULL,
  `email` varchar(200) NOT NULL,
  `mobile` varchar(200) CHARACTER SET utf8 NOT NULL,
  `alternate_phn` text NOT NULL,
  `gender` varchar(100) NOT NULL,
  `country` int(11) NOT NULL,
  `city` int(11) NOT NULL,
  `area` int(11) NOT NULL,
  `delivery_address` text CHARACTER SET utf8 NOT NULL,
  `password` varchar(200) NOT NULL,
  `date` varchar(200) NOT NULL,
  `date_time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `fullname`, `email`, `mobile`, `alternate_phn`, `gender`, `country`, `city`, `area`, `delivery_address`, `password`, `date`, `date_time`) VALUES
(1, 'shohag mia', 'shoh@gmail.com', '11111111100', '11111111100', 'Male', 1, 2, 9, 'dhaka f', 'b59c67bf196a4758191e42f76670ceba', '2016-07-18', '2016-07-18 08:32:20'),
(2, 'shohag', 'so@gmail.com', '11111111111', '', 'Male', 1, 2, 1, 'ASDFSDVB  ', 'b59c67bf196a4758191e42f76670ceba', '', ''),
(3, 'hannan', 'han@gmail.com', '111111112222', '', 'Female', 2, 6, 7, 'd fdhg yhdt ', 'b59c67bf196a4758191e42f76670ceba', '', ''),
(4, 'shohag4fwr', 'shohag@gmail.com', '01745114475', '', 'Male', 1, 1, 5, 'Dhakaffer', 'b59c67bf196a4758191e42f76670ceba', '', ''),
(5, 'mmm', 'mm@gmail.com', '01745114476', '', 'Male', 1, 1, 5, 'uttara', '594f803b380a41396ed63dca39503542', '', ''),
(6, 'Helal', 'm.helal.k@gmail.com', '+8801838923219', '', 'Male', 1, 1, 5, 'Gp Cha', 'ae4171856a75f7b67d51fc0e1f95902e', '', ''),
(7, 'hjkh', 'mhelal505@gmail.com', 'fffffffffff', '', '', 0, 0, 0, '', 'ae4171856a75f7b67d51fc0e1f95902e', '', ''),
(8, 'Md Rifat', 'rifatcse09@gmail.com', '01670840934', '', 'Male', 1, 1, 5, 'Dfg', '3be9758e8337b13053f4c31e5b85aab7', '', ''),
(9, 'shohag mia', 'shsoh@gmail.com', '11111222222', '', '', 0, 0, 0, '', 'b59c67bf196a4758191e42f76670ceba', '', ''),
(10, 'Mamun', 'mamun@gmail.com', '345345343333', '', 'Male', 1, 3, 1, 'uttara,Dhaka', '81dc9bdb52d04dc20036dbd8313ed055', '', ''),
(11, 'Shohag Hasan', 'hasan@gmail.com', '111111111449', '', '', 0, 0, 0, '', 'b59c67bf196a4758191e42f76670ceba', '', ''),
(12, 'shohag', 'joat1962@superrito.com', '4654434242232', '', '', 1, 2, 8, 'eddd', '179ad45c6ce2cb97cf1029e212046e81', '', ''),
(13, 'Full Name', 'admin@admin.com', '01234567876666666666666777', '', 'Male', 1, 1, 6, 'Delivery Address', '507250b947cc397023a9595001fcf167', '', ''),
(14, 'Malaka', 'mmm@gmail.com', '01681182568', '', 'Male', 1, 1, 1, 'dhaka bangladesh', 'b59c67bf196a4758191e42f76670ceba', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `root_category`
--

CREATE TABLE `root_category` (
  `id` int(11) NOT NULL,
  `root_cat_name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `cat_status` varchar(100) NOT NULL,
  `status` varchar(50) NOT NULL,
  `date` varchar(100) NOT NULL,
  `date_time` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `root_category`
--

INSERT INTO `root_category` (`id`, `root_cat_name`, `cat_status`, `status`, `date`, `date_time`) VALUES
(1, 'women''s', 'Yes', 'Yes', '2016-07-18', '2016-07-18 08:07:52'),
(6, 'Men''s', 'Yes', 'Yes', '2016-08-23', '2016-08-23 12:15:39'),
(7, 'Home', 'Yes', 'No', '2016-08-23', '2016-08-23 14:23:42');

-- --------------------------------------------------------

--
-- Table structure for table `sub_category`
--

CREATE TABLE `sub_category` (
  `id` int(11) NOT NULL,
  `rootcat_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `subcat_name` text CHARACTER SET utf8 NOT NULL,
  `status` varchar(200) NOT NULL,
  `date` varchar(123) NOT NULL,
  `date_time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sub_category`
--

INSERT INTO `sub_category` (`id`, `rootcat_id`, `cat_id`, `subcat_name`, `status`, `date`, `date_time`) VALUES
(1, 1, 1, 'Hair', 'Yes', '2016-07-25', '2016-07-25 05:20:27'),
(2, 1, 2, 'T-Shirts', 'Yes', '2016-07-25', '2016-07-25 05:20:41'),
(3, 1, 3, 'Facial', 'Yes', '2016-07-25', '2016-07-25 05:20:51'),
(4, 1, 4, 'Cream', 'Yes', '2016-07-25', '2016-07-25 05:21:01'),
(5, 1, 5, 'Toothpaste', 'Yes', '2016-07-25', '2016-07-25 05:21:16'),
(6, 1, 6, 'Soap', 'Yes', '2016-07-25', '2016-07-25 05:21:35'),
(7, 3, 8, 'Polo', 'Yes', '2016-07-26', '2016-07-26 01:44:16'),
(8, 4, 9, 'Polo', 'Yes', '2016-07-26', '2016-07-26 01:49:20'),
(10, 6, 13, 'Shirts', 'Yes', '2016-08-23', '2016-08-23 12:21:25'),
(11, 6, 13, 'Gens pant', 'Yes', '2016-08-23', '2016-08-23 12:22:14'),
(12, 6, 13, 'watch', 'Yes', '2016-08-23', '2016-08-23 12:23:00'),
(13, 1, 2, 'Saree ', 'Yes', '2016-08-23', '2016-08-23 13:23:06');

-- --------------------------------------------------------

--
-- Table structure for table `superadmin`
--

CREATE TABLE `superadmin` (
  `id` int(11) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `superadmin`
--

INSERT INTO `superadmin` (`id`, `full_name`, `username`, `password`) VALUES
(1, 'admin', 'admin', '21232f297a57a5a743894a0e4a801fc3');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_ad`
--

CREATE TABLE `tbl_ad` (
  `id` int(11) NOT NULL,
  `title` varchar(400) CHARACTER SET utf8 NOT NULL,
  `ad_img` varchar(200) NOT NULL,
  `ad_href` varchar(200) NOT NULL,
  `date` varchar(200) NOT NULL,
  `date_time` text NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_country`
--

CREATE TABLE `tbl_country` (
  `id` int(11) NOT NULL,
  `country_name` text CHARACTER SET utf8 NOT NULL,
  `status` varchar(200) NOT NULL,
  `date` varchar(200) NOT NULL,
  `date_time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_country`
--

INSERT INTO `tbl_country` (`id`, `country_name`, `status`, `date`, `date_time`) VALUES
(1, 'Bangladesh', 'Yes', 'Jan 04, 2015', 'January 4, 2015, 9:17 am'),
(2, 'India', 'Yes', 'May 18, 2016', 'May 18, 2016, 11:11 pm'),
(3, 'Bhutan', 'Yes', 'May 19, 2016', 'May 19, 2016, 8:17 pm'),
(4, 'Armenia', 'Yes', 'May 19, 2016', 'May 19, 2016, 8:35 pm');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_district`
--

CREATE TABLE `tbl_district` (
  `id` int(11) NOT NULL,
  `country` int(11) NOT NULL,
  `district` text CHARACTER SET utf8 NOT NULL,
  `status` varchar(200) NOT NULL,
  `date` varchar(200) NOT NULL,
  `date_time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_district`
--

INSERT INTO `tbl_district` (`id`, `country`, `district`, `status`, `date`, `date_time`) VALUES
(1, 1, 'Dhaka', 'Yes', '2016-07-18', '2016-07-18 06:19:52'),
(2, 1, 'Gazipur', 'Yes', '2016-07-18', '2016-07-18 06:20:16'),
(3, 1, 'Mymensingh', 'Yes', '2016-07-18', '2016-07-18 06:20:46'),
(4, 1, 'Sherpur', 'Yes', '2016-07-18', '2016-07-18 06:21:03'),
(5, 1, 'Jamalpur', 'Yes', '2016-07-18', '2016-07-18 06:21:18'),
(6, 1, 'Narayanganj', 'Yes', '2016-07-18', '2016-07-18 06:24:24'),
(7, 1, 'Sirajgonj', 'No', '2016-07-26', '2016-07-26 02:15:17'),
(8, 2, 'Kholkhata', 'Yes', '2016-08-24', '2016-08-24 09:42:20');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_footerscroll`
--

CREATE TABLE `tbl_footerscroll` (
  `id` int(11) NOT NULL,
  `footer_title` longtext CHARACTER SET utf8 NOT NULL,
  `status` varchar(20) NOT NULL,
  `date` varchar(200) NOT NULL,
  `date_time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order_details`
--

CREATE TABLE `tbl_order_details` (
  `order_id` int(12) NOT NULL,
  `uniq_id` int(12) NOT NULL,
  `customer_id` varchar(100) NOT NULL,
  `book_id` int(11) NOT NULL,
  `book_price` float(15,2) NOT NULL,
  `book_qty` int(11) NOT NULL,
  `order_status` varchar(200) NOT NULL,
  `status_date` varchar(100) NOT NULL,
  `order_date_time` varchar(111) NOT NULL,
  `order_from` varchar(111) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pagecontent`
--

CREATE TABLE `tbl_pagecontent` (
  `id` int(11) NOT NULL,
  `page_typ` varchar(40) NOT NULL,
  `content` longtext CHARACTER SET utf8 NOT NULL,
  `status` varchar(110) NOT NULL,
  `date` varchar(100) NOT NULL,
  `date_time` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_slider`
--

CREATE TABLE `tbl_slider` (
  `id` int(11) NOT NULL,
  `image_name` varchar(255) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_slider`
--

INSERT INTO `tbl_slider` (`id`, `image_name`, `status`) VALUES
(1, '4252.jpg', 'Yes'),
(2, '5192.jpg', 'Yes'),
(3, '6968.jpg', 'Yes'),
(4, '8450.jpg', 'Yes'),
(5, '3891.jpg', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_thana`
--

CREATE TABLE `tbl_thana` (
  `id` int(11) NOT NULL,
  `country` int(11) NOT NULL,
  `district` int(11) NOT NULL,
  `thana` text CHARACTER SET utf8 NOT NULL,
  `status` varchar(200) NOT NULL,
  `date` varchar(200) NOT NULL,
  `date_time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_thana`
--

INSERT INTO `tbl_thana` (`id`, `country`, `district`, `thana`, `status`, `date`, `date_time`) VALUES
(1, 1, 1, 'khilkhet Thana', 'Yes', '2016-07-18', '2016-07-18 06:27:03'),
(2, 1, 1, 'Bangshal', 'Yes', '2016-07-18', '2016-07-18 06:27:27'),
(3, 1, 1, 'Cantonment', 'Yes', '2016-07-18', '2016-07-18 06:27:45'),
(4, 1, 1, 'Chackbazar', 'Yes', '2016-07-18', '2016-07-18 06:27:58'),
(5, 1, 1, 'Uttara', 'Yes', '2016-07-18', '2016-07-18 06:28:21'),
(6, 1, 1, 'Paltan', 'Yes', '2016-07-18', '2016-07-18 06:29:54'),
(7, 1, 1, 'Tejgaon', 'Yes', '2016-07-18', '2016-07-18 06:30:11'),
(8, 1, 7, 'Shahzadpur', 'Yes', '2016-07-26', '2016-07-26 02:17:30'),
(9, 1, 2, 'Gazipur Sadar', 'Yes', '2016-08-24', '2016-08-24 09:41:36'),
(10, 1, 2, 'Mauna', 'Yes', '2016-08-24', '2016-08-24 09:42:02'),
(11, 2, 8, 'Kholkhata lo', 'Yes', '2016-08-24', '2016-08-24 09:42:48');

-- --------------------------------------------------------

--
-- Table structure for table `temp_details`
--

CREATE TABLE `temp_details` (
  `temp_id` int(12) NOT NULL,
  `user_id` varchar(222) NOT NULL,
  `book_id` int(12) NOT NULL,
  `book_qty` float(11,2) NOT NULL,
  `book_price` float(15,2) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `temp_order`
--

CREATE TABLE `temp_order` (
  `temp_id` int(12) NOT NULL,
  `user_id` varchar(222) NOT NULL,
  `uniq_id` int(33) NOT NULL,
  `temp_date_time` varchar(111) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `temp_order`
--

INSERT INTO `temp_order` (`temp_id`, `user_id`, `uniq_id`, `temp_date_time`) VALUES
(1, '', 1471955217, 'August 23, 2016, 2:26 pm'),
(2, '', 1472018065, 'August 24, 2016, 7:54 am');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`code`),
  ADD KEY `continent_code` (`continent_code`);

--
-- Indexes for table `image_product`
--
ALTER TABLE `image_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `producttype`
--
ALTER TABLE `producttype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `root_category`
--
ALTER TABLE `root_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_category`
--
ALTER TABLE `sub_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `superadmin`
--
ALTER TABLE `superadmin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_ad`
--
ALTER TABLE `tbl_ad`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_country`
--
ALTER TABLE `tbl_country`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_district`
--
ALTER TABLE `tbl_district`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_footerscroll`
--
ALTER TABLE `tbl_footerscroll`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_order_details`
--
ALTER TABLE `tbl_order_details`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `tbl_pagecontent`
--
ALTER TABLE `tbl_pagecontent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_slider`
--
ALTER TABLE `tbl_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_thana`
--
ALTER TABLE `tbl_thana`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `temp_order`
--
ALTER TABLE `temp_order`
  ADD PRIMARY KEY (`temp_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `image_product`
--
ALTER TABLE `image_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `producttype`
--
ALTER TABLE `producttype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `root_category`
--
ALTER TABLE `root_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `sub_category`
--
ALTER TABLE `sub_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `superadmin`
--
ALTER TABLE `superadmin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tbl_ad`
--
ALTER TABLE `tbl_ad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_country`
--
ALTER TABLE `tbl_country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbl_district`
--
ALTER TABLE `tbl_district`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `tbl_footerscroll`
--
ALTER TABLE `tbl_footerscroll`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_order_details`
--
ALTER TABLE `tbl_order_details`
  MODIFY `order_id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_pagecontent`
--
ALTER TABLE `tbl_pagecontent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_slider`
--
ALTER TABLE `tbl_slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `tbl_thana`
--
ALTER TABLE `tbl_thana`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `temp_order`
--
ALTER TABLE `temp_order`
  MODIFY `temp_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
