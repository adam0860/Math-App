import type { Lesson } from '../../types';

// Running example: loading time X (seconds) with density f(x) = (3/32) x (4 - x) on [0, 4].
const fLoad = '3/32*x*(4 - x)';
const FLoad = (v: string) => `(3*(${v})^2/16 - (${v})^3/32)`;

const DISK_SVG = '<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="118" r="95" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="120" cy="118" r="47.5" fill="none" class="s-gray" stroke-width="1" stroke-dasharray="4 3"/><circle cx="128.1" cy="117.4" r="1.9" class="f-red"/><circle cx="121.9" cy="140.4" r="1.9" class="f-red"/><circle cx="112.3" cy="193.7" r="1.9" class="f-red"/><circle cx="137.6" cy="170.4" r="1.9" class="f-red"/><circle cx="112.8" cy="112.7" r="1.9" class="f-red"/><circle cx="79.0" cy="121.8" r="1.9" class="f-red"/><circle cx="139.5" cy="76.9" r="1.9" class="f-red"/><circle cx="123.8" cy="132.7" r="1.9" class="f-red"/><circle cx="170.2" cy="69.6" r="1.9" class="f-red"/><circle cx="109.5" cy="120.4" r="1.9" class="f-red"/><circle cx="133.2" cy="83.3" r="1.9" class="f-red"/><circle cx="135.8" cy="71.5" r="1.9" class="f-red"/><circle cx="154.6" cy="96.2" r="1.9" class="f-red"/><circle cx="64.3" cy="118.4" r="1.9" class="f-red"/><circle cx="65.9" cy="73.5" r="1.9" class="f-red"/><circle cx="35.8" cy="84.0" r="1.9" class="f-red"/><circle cx="129.9" cy="143.1" r="1.9" class="f-red"/><circle cx="58.4" cy="117.4" r="1.9" class="f-red"/><circle cx="179.2" cy="88.6" r="1.9" class="f-red"/><circle cx="143.4" cy="102.9" r="1.9" class="f-red"/><circle cx="120.1" cy="118.0" r="1.9" class="f-red"/><circle cx="72.1" cy="38.9" r="1.9" class="f-red"/><circle cx="106.8" cy="143.1" r="1.9" class="f-red"/><circle cx="139.6" cy="140.5" r="1.9" class="f-red"/><circle cx="174.2" cy="183.1" r="1.9" class="f-red"/><circle cx="135.5" cy="64.6" r="1.9" class="f-red"/><circle cx="163.3" cy="106.6" r="1.9" class="f-red"/><circle cx="47.1" cy="108.7" r="1.9" class="f-red"/><circle cx="117.9" cy="119.9" r="1.9" class="f-red"/><circle cx="53.0" cy="113.8" r="1.9" class="f-red"/><circle cx="137.0" cy="86.8" r="1.9" class="f-red"/><circle cx="119.8" cy="109.4" r="1.9" class="f-red"/><circle cx="177.7" cy="142.6" r="1.9" class="f-red"/><circle cx="140.6" cy="204.0" r="1.9" class="f-red"/><circle cx="133.3" cy="103.5" r="1.9" class="f-red"/><circle cx="60.2" cy="120.6" r="1.9" class="f-red"/><circle cx="104.5" cy="94.3" r="1.9" class="f-red"/><circle cx="132.1" cy="48.6" r="1.9" class="f-red"/><circle cx="75.1" cy="66.1" r="1.9" class="f-red"/><circle cx="117.9" cy="97.3" r="1.9" class="f-red"/><circle cx="44.4" cy="95.7" r="1.9" class="f-red"/><circle cx="128.1" cy="180.0" r="1.9" class="f-red"/><circle cx="145.0" cy="177.9" r="1.9" class="f-red"/><circle cx="197.8" cy="114.8" r="1.9" class="f-red"/><circle cx="160.6" cy="120.7" r="1.9" class="f-red"/><circle cx="93.9" cy="50.8" r="1.9" class="f-red"/><circle cx="181.1" cy="61.1" r="1.9" class="f-red"/><circle cx="121.1" cy="127.7" r="1.9" class="f-red"/><circle cx="197.0" cy="142.2" r="1.9" class="f-red"/><circle cx="89.8" cy="140.1" r="1.9" class="f-red"/><circle cx="98.1" cy="157.9" r="1.9" class="f-red"/><circle cx="106.5" cy="121.3" r="1.9" class="f-red"/><circle cx="60.4" cy="147.2" r="1.9" class="f-red"/><circle cx="145.9" cy="108.1" r="1.9" class="f-red"/><circle cx="180.6" cy="174.4" r="1.9" class="f-red"/><circle cx="144.6" cy="109.0" r="1.9" class="f-red"/><circle cx="171.2" cy="133.1" r="1.9" class="f-red"/><circle cx="155.1" cy="103.6" r="1.9" class="f-red"/><circle cx="91.0" cy="168.5" r="1.9" class="f-red"/><circle cx="117.3" cy="99.5" r="1.9" class="f-red"/><circle cx="137.1" cy="118.3" r="1.9" class="f-red"/><circle cx="52.9" cy="141.1" r="1.9" class="f-red"/><circle cx="88.7" cy="53.8" r="1.9" class="f-red"/><circle cx="82.7" cy="79.1" r="1.9" class="f-red"/><circle cx="150.3" cy="35.9" r="1.9" class="f-red"/><circle cx="131.1" cy="134.1" r="1.9" class="f-red"/><circle cx="54.2" cy="165.0" r="1.9" class="f-red"/><circle cx="107.9" cy="107.5" r="1.9" class="f-red"/><circle cx="210.1" cy="134.4" r="1.9" class="f-red"/><circle cx="150.4" cy="67.1" r="1.9" class="f-red"/><circle cx="70.1" cy="147.0" r="1.9" class="f-red"/><circle cx="122.3" cy="210.2" r="1.9" class="f-red"/><circle cx="132.9" cy="191.7" r="1.9" class="f-red"/><circle cx="76.2" cy="57.0" r="1.9" class="f-red"/><circle cx="124.9" cy="119.5" r="1.9" class="f-red"/><circle cx="121.2" cy="153.1" r="1.9" class="f-red"/><circle cx="117.3" cy="125.6" r="1.9" class="f-red"/><circle cx="119.0" cy="136.4" r="1.9" class="f-red"/><circle cx="117.5" cy="97.8" r="1.9" class="f-red"/><circle cx="51.8" cy="73.2" r="1.9" class="f-red"/><circle cx="129.9" cy="111.2" r="1.9" class="f-red"/><circle cx="111.5" cy="91.1" r="1.9" class="f-red"/><circle cx="107.1" cy="163.0" r="1.9" class="f-red"/><circle cx="83.7" cy="190.1" r="1.9" class="f-red"/><circle cx="185.6" cy="182.1" r="1.9" class="f-red"/><circle cx="123.2" cy="185.2" r="1.9" class="f-red"/><circle cx="103.9" cy="105.6" r="1.9" class="f-red"/><circle cx="113.8" cy="66.6" r="1.9" class="f-red"/><circle cx="100.9" cy="182.3" r="1.9" class="f-red"/><circle cx="117.2" cy="122.1" r="1.9" class="f-red"/><circle cx="141.1" cy="56.9" r="1.9" class="f-red"/><circle cx="153.8" cy="109.0" r="1.9" class="f-red"/><circle cx="168.3" cy="146.4" r="1.9" class="f-red"/><circle cx="177.3" cy="145.5" r="1.9" class="f-red"/><circle cx="123.7" cy="54.5" r="1.9" class="f-red"/><circle cx="70.3" cy="119.3" r="1.9" class="f-red"/><circle cx="73.0" cy="141.9" r="1.9" class="f-red"/><circle cx="107.4" cy="104.0" r="1.9" class="f-red"/><circle cx="123.1" cy="71.1" r="1.9" class="f-red"/><circle cx="130.8" cy="123.1" r="1.9" class="f-red"/><circle cx="164.4" cy="107.1" r="1.9" class="f-red"/><circle cx="169.2" cy="104.7" r="1.9" class="f-red"/><circle cx="56.3" cy="154.8" r="1.9" class="f-red"/><circle cx="83.3" cy="125.1" r="1.9" class="f-red"/><circle cx="119.7" cy="119.8" r="1.9" class="f-red"/><circle cx="77.2" cy="91.8" r="1.9" class="f-red"/><circle cx="125.4" cy="136.7" r="1.9" class="f-red"/><circle cx="51.2" cy="102.8" r="1.9" class="f-red"/><circle cx="150.5" cy="97.1" r="1.9" class="f-red"/><circle cx="83.9" cy="116.6" r="1.9" class="f-red"/><circle cx="160.2" cy="41.5" r="1.9" class="f-red"/><circle cx="136.1" cy="151.7" r="1.9" class="f-red"/><circle cx="144.7" cy="95.9" r="1.9" class="f-red"/><circle cx="143.6" cy="141.1" r="1.9" class="f-red"/><circle cx="130.6" cy="162.4" r="1.9" class="f-red"/><circle cx="118.4" cy="109.3" r="1.9" class="f-red"/><circle cx="103.3" cy="167.2" r="1.9" class="f-red"/><circle cx="184.2" cy="177.5" r="1.9" class="f-red"/><circle cx="165.7" cy="145.7" r="1.9" class="f-red"/><circle cx="139.0" cy="49.9" r="1.9" class="f-red"/><circle cx="209.3" cy="129.1" r="1.9" class="f-red"/><circle cx="195.0" cy="145.7" r="1.9" class="f-red"/><circle cx="186.6" cy="94.3" r="1.9" class="f-red"/><circle cx="135.5" cy="42.3" r="1.9" class="f-red"/><circle cx="66.5" cy="174.7" r="1.9" class="f-red"/><circle cx="128.5" cy="140.5" r="1.9" class="f-red"/><circle cx="150.7" cy="84.1" r="1.9" class="f-red"/><circle cx="127.6" cy="86.3" r="1.9" class="f-red"/><circle cx="107.8" cy="96.3" r="1.9" class="f-red"/><circle cx="66.7" cy="107.7" r="1.9" class="f-red"/><circle cx="90.2" cy="113.2" r="1.9" class="f-red"/><circle cx="178.2" cy="109.9" r="1.9" class="f-red"/><circle cx="65.2" cy="110.3" r="1.9" class="f-red"/><circle cx="128.6" cy="123.0" r="1.9" class="f-red"/><circle cx="157.5" cy="137.0" r="1.9" class="f-red"/><circle cx="89.4" cy="97.1" r="1.9" class="f-red"/><circle cx="112.7" cy="51.3" r="1.9" class="f-red"/><circle cx="114.2" cy="112.0" r="1.9" class="f-red"/><circle cx="119.3" cy="102.0" r="1.9" class="f-red"/><circle cx="106.7" cy="164.8" r="1.9" class="f-red"/><circle cx="93.5" cy="145.8" r="1.9" class="f-red"/><circle cx="113.9" cy="180.9" r="1.9" class="f-red"/><circle cx="98.0" cy="140.7" r="1.9" class="f-red"/><circle cx="118.0" cy="136.6" r="1.9" class="f-red"/><circle cx="164.6" cy="41.6" r="1.9" class="f-red"/><circle cx="133.9" cy="136.6" r="1.9" class="f-red"/><circle cx="123.7" cy="131.5" r="1.9" class="f-red"/><circle cx="114.0" cy="92.1" r="1.9" class="f-red"/><circle cx="94.1" cy="137.3" r="1.9" class="f-red"/><circle cx="108.4" cy="136.0" r="1.9" class="f-red"/><circle cx="170.3" cy="109.9" r="1.9" class="f-red"/><circle cx="189.9" cy="62.9" r="1.9" class="f-red"/><circle cx="122.3" cy="129.7" r="1.9" class="f-red"/><circle cx="142.1" cy="150.7" r="1.9" class="f-red"/><circle cx="56.6" cy="121.0" r="1.9" class="f-red"/><circle cx="44.9" cy="80.3" r="1.9" class="f-red"/><circle cx="65.8" cy="196.0" r="1.9" class="f-red"/><circle cx="108.5" cy="110.6" r="1.9" class="f-red"/><circle cx="97.7" cy="72.1" r="1.9" class="f-red"/><circle cx="153.1" cy="41.1" r="1.9" class="f-red"/><circle cx="120.2" cy="123.0" r="1.9" class="f-red"/><circle cx="85.8" cy="73.8" r="1.9" class="f-red"/><circle cx="135.4" cy="123.9" r="1.9" class="f-red"/><circle cx="187.0" cy="146.9" r="1.9" class="f-red"/><circle cx="203.7" cy="148.4" r="1.9" class="f-red"/><circle cx="158.1" cy="152.1" r="1.9" class="f-red"/><circle cx="120.2" cy="117.2" r="1.9" class="f-red"/><circle cx="115.8" cy="122.4" r="1.9" class="f-red"/><circle cx="80.5" cy="119.8" r="1.9" class="f-red"/><circle cx="43.3" cy="142.4" r="1.9" class="f-red"/><circle cx="126.0" cy="139.7" r="1.9" class="f-red"/><circle cx="181.0" cy="136.0" r="1.9" class="f-red"/><circle cx="136.0" cy="153.0" r="1.9" class="f-red"/><circle cx="135.8" cy="98.4" r="1.9" class="f-red"/><circle cx="84.7" cy="174.8" r="1.9" class="f-red"/><circle cx="94.3" cy="132.0" r="1.9" class="f-red"/><circle cx="116.8" cy="153.2" r="1.9" class="f-red"/><circle cx="116.0" cy="45.4" r="1.9" class="f-red"/><circle cx="106.1" cy="73.0" r="1.9" class="f-red"/><circle cx="64.5" cy="167.7" r="1.9" class="f-red"/><circle cx="71.0" cy="116.0" r="1.9" class="f-red"/><circle cx="107.9" cy="127.3" r="1.9" class="f-red"/><circle cx="82.2" cy="99.3" r="1.9" class="f-red"/><circle cx="51.0" cy="72.0" r="1.9" class="f-red"/><circle cx="72.6" cy="92.9" r="1.9" class="f-red"/><circle cx="194.7" cy="64.9" r="1.9" class="f-red"/><circle cx="120.1" cy="118.0" r="1.9" class="f-red"/><circle cx="150.7" cy="128.3" r="1.9" class="f-red"/><circle cx="66.8" cy="168.1" r="1.9" class="f-red"/><circle cx="183.1" cy="134.3" r="1.9" class="f-red"/><circle cx="82.4" cy="155.8" r="1.9" class="f-red"/><circle cx="140.6" cy="58.4" r="1.9" class="f-red"/><circle cx="84.3" cy="42.8" r="1.9" class="f-red"/><circle cx="60.8" cy="91.3" r="1.9" class="f-red"/><circle cx="164.5" cy="144.8" r="1.9" class="f-red"/><circle cx="140.1" cy="68.5" r="1.9" class="f-red"/><circle cx="71.8" cy="76.9" r="1.9" class="f-red"/><circle cx="110.0" cy="147.1" r="1.9" class="f-red"/><circle cx="134.0" cy="56.0" r="1.9" class="f-red"/><circle cx="176.7" cy="132.2" r="1.9" class="f-red"/><circle cx="148.6" cy="187.0" r="1.9" class="f-red"/><circle cx="131.1" cy="73.7" r="1.9" class="f-red"/><circle cx="122.5" cy="118.7" r="1.9" class="f-red"/><circle cx="154.4" cy="155.7" r="1.9" class="f-red"/><circle cx="38.5" cy="117.2" r="1.9" class="f-red"/><circle cx="104.9" cy="59.1" r="1.9" class="f-red"/><circle cx="68.2" cy="85.5" r="1.9" class="f-red"/><circle cx="156.1" cy="126.5" r="1.9" class="f-red"/><circle cx="114.7" cy="151.5" r="1.9" class="f-red"/><circle cx="101.4" cy="52.3" r="1.9" class="f-red"/><circle cx="115.7" cy="124.0" r="1.9" class="f-red"/><circle cx="148.3" cy="195.3" r="1.9" class="f-red"/><circle cx="203.2" cy="119.2" r="1.9" class="f-red"/><circle cx="112.7" cy="209.1" r="1.9" class="f-red"/><circle cx="131.7" cy="112.6" r="1.9" class="f-red"/><circle cx="130.4" cy="121.4" r="1.9" class="f-red"/><circle cx="39.8" cy="90.2" r="1.9" class="f-red"/><circle cx="152.1" cy="97.5" r="1.9" class="f-red"/><circle cx="112.2" cy="93.5" r="1.9" class="f-red"/><circle cx="113.0" cy="153.6" r="1.9" class="f-red"/><circle cx="82.7" cy="67.6" r="1.9" class="f-red"/><circle cx="131.2" cy="128.5" r="1.9" class="f-red"/><circle cx="73.7" cy="118.3" r="1.9" class="f-red"/><circle cx="114.8" cy="180.5" r="1.9" class="f-red"/><circle cx="168.6" cy="69.8" r="1.9" class="f-red"/><circle cx="120.8" cy="117.1" r="1.9" class="f-red"/><circle cx="125.7" cy="41.2" r="1.9" class="f-red"/><circle cx="90.7" cy="147.1" r="1.9" class="f-red"/><circle cx="132.0" cy="78.4" r="1.9" class="f-red"/><circle cx="173.0" cy="111.3" r="1.9" class="f-red"/><circle cx="101.9" cy="137.5" r="1.9" class="f-red"/><circle cx="36.8" cy="104.7" r="1.9" class="f-red"/><circle cx="130.5" cy="135.2" r="1.9" class="f-red"/><circle cx="160.1" cy="150.4" r="1.9" class="f-red"/><circle cx="117.0" cy="102.3" r="1.9" class="f-red"/><circle cx="174.4" cy="139.6" r="1.9" class="f-red"/><circle cx="51.1" cy="67.1" r="1.9" class="f-red"/><circle cx="183.4" cy="172.9" r="1.9" class="f-red"/><circle cx="113.8" cy="106.8" r="1.9" class="f-red"/><circle cx="121.3" cy="58.7" r="1.9" class="f-red"/><circle cx="199.0" cy="87.2" r="1.9" class="f-red"/><circle cx="105.3" cy="130.1" r="1.9" class="f-red"/><circle cx="89.7" cy="143.2" r="1.9" class="f-red"/><circle cx="65.3" cy="157.9" r="1.9" class="f-red"/><circle cx="100.8" cy="50.6" r="1.9" class="f-red"/><circle cx="130.1" cy="76.3" r="1.9" class="f-red"/><circle cx="165.3" cy="158.3" r="1.9" class="f-red"/><circle cx="91.2" cy="174.7" r="1.9" class="f-red"/><circle cx="151.5" cy="129.4" r="1.9" class="f-red"/><circle cx="125.9" cy="179.7" r="1.9" class="f-red"/><circle cx="114.4" cy="63.4" r="1.9" class="f-red"/><circle cx="181.1" cy="92.4" r="1.9" class="f-red"/><circle cx="168.2" cy="112.0" r="1.9" class="f-red"/><circle cx="149.1" cy="131.3" r="1.9" class="f-red"/><circle cx="86.3" cy="141.9" r="1.9" class="f-red"/><circle cx="181.0" cy="55.0" r="1.9" class="f-red"/><circle cx="102.2" cy="117.5" r="1.9" class="f-red"/><circle cx="111.8" cy="129.4" r="1.9" class="f-red"/><circle cx="120.2" cy="116.9" r="1.9" class="f-red"/><circle cx="173.3" cy="57.1" r="1.9" class="f-red"/><text x="120" y="236" text-anchor="middle" font-size="14">r = U  (wrong)</text><circle cx="360" cy="118" r="95" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="360" cy="118" r="47.5" fill="none" class="s-gray" stroke-width="1" stroke-dasharray="4 3"/><circle cx="387.7" cy="116.0" r="1.9" class="f-blue"/><circle cx="363.9" cy="164.1" r="1.9" class="f-blue"/><circle cx="351.4" cy="202.6" r="1.9" class="f-blue"/><circle cx="383.1" cy="186.7" r="1.9" class="f-blue"/><circle cx="336.4" cy="100.8" r="1.9" class="f-blue"/><circle cx="297.8" cy="123.8" r="1.9" class="f-blue"/><circle cx="388.2" cy="58.6" r="1.9" class="f-blue"/><circle cx="369.5" cy="154.8" r="1.9" class="f-blue"/><circle cx="418.6" cy="61.5" r="1.9" class="f-blue"/><circle cx="328.8" cy="125.2" r="1.9" class="f-blue"/><circle cx="381.1" cy="62.5" r="1.9" class="f-blue"/><circle cx="382.0" cy="53.3" r="1.9" class="f-blue"/><circle cx="412.8" cy="84.8" r="1.9" class="f-blue"/><circle cx="287.2" cy="118.5" r="1.9" class="f-blue"/><circle cx="297.0" cy="66.1" r="1.9" class="f-blue"/><circle cx="273.8" cy="83.2" r="1.9" class="f-blue"/><circle cx="378.6" cy="165.1" r="1.9" class="f-blue"/><circle cx="283.5" cy="117.3" r="1.9" class="f-blue"/><circle cx="431.0" cy="82.7" r="1.9" class="f-blue"/><circle cx="403.2" cy="90.2" r="1.9" class="f-blue"/><circle cx="363.6" cy="118.5" r="1.9" class="f-blue"/><circle cx="311.5" cy="37.8" r="1.9" class="f-blue"/><circle cx="335.9" cy="164.0" r="1.9" class="f-blue"/><circle cx="395.0" cy="158.1" r="1.9" class="f-blue"/><circle cx="417.4" cy="186.9" r="1.9" class="f-blue"/><circle cx="380.3" cy="48.2" r="1.9" class="f-blue"/><circle cx="423.1" cy="101.4" r="1.9" class="f-blue"/><circle cx="277.1" cy="107.4" r="1.9" class="f-blue"/><circle cx="347.7" cy="129.1" r="1.9" class="f-blue"/><circle cx="280.3" cy="113.0" r="1.9" class="f-blue"/><circle cx="387.8" cy="66.9" r="1.9" class="f-blue"/><circle cx="359.4" cy="89.4" r="1.9" class="f-blue"/><circle cx="431.0" cy="148.3" r="1.9" class="f-blue"/><circle cx="381.4" cy="207.2" r="1.9" class="f-blue"/><circle cx="389.1" cy="86.1" r="1.9" class="f-blue"/><circle cx="284.7" cy="121.3" r="1.9" class="f-blue"/><circle cx="331.6" cy="74.6" r="1.9" class="f-blue"/><circle cx="374.1" cy="37.4" r="1.9" class="f-blue"/><circle cx="307.2" cy="56.9" r="1.9" class="f-blue"/><circle cx="355.5" cy="73.8" r="1.9" class="f-blue"/><circle cx="277.0" cy="93.5" r="1.9" class="f-blue"/><circle cx="370.0" cy="194.4" r="1.9" class="f-blue"/><circle cx="390.2" cy="190.4" r="1.9" class="f-blue"/><circle cx="446.0" cy="114.5" r="1.9" class="f-blue"/><circle cx="422.1" cy="122.1" r="1.9" class="f-blue"/><circle cx="330.0" cy="40.9" r="1.9" class="f-blue"/><circle cx="425.2" cy="57.3" r="1.9" class="f-blue"/><circle cx="363.5" cy="148.2" r="1.9" class="f-blue"/><circle cx="443.5" cy="144.3" r="1.9" class="f-blue"/><circle cx="311.9" cy="153.3" r="1.9" class="f-blue"/><circle cx="328.3" cy="175.7" r="1.9" class="f-blue"/><circle cx="324.7" cy="126.7" r="1.9" class="f-blue"/><circle cx="288.7" cy="153.0" r="1.9" class="f-blue"/><circle cx="408.0" cy="99.7" r="1.9" class="f-blue"/><circle cx="424.9" cy="178.4" r="1.9" class="f-blue"/><circle cx="406.8" cy="100.8" r="1.9" class="f-blue"/><circle cx="428.3" cy="138.2" r="1.9" class="f-blue"/><circle cx="415.6" cy="95.3" r="1.9" class="f-blue"/><circle cx="322.9" cy="182.5" r="1.9" class="f-blue"/><circle cx="354.0" cy="76.3" r="1.9" class="f-blue"/><circle cx="400.3" cy="118.8" r="1.9" class="f-blue"/><circle cx="282.4" cy="144.7" r="1.9" class="f-blue"/><circle cx="323.9" cy="43.9" r="1.9" class="f-blue"/><circle cx="310.5" cy="66.4" r="1.9" class="f-blue"/><circle cx="391.6" cy="32.5" r="1.9" class="f-blue"/><circle cx="384.6" cy="153.4" r="1.9" class="f-blue"/><circle cx="288.7" cy="169.0" r="1.9" class="f-blue"/><circle cx="330.5" cy="92.4" r="1.9" class="f-blue"/><circle cx="451.8" cy="134.7" r="1.9" class="f-blue"/><circle cx="398.5" cy="53.6" r="1.9" class="f-blue"/><circle cx="296.0" cy="155.2" r="1.9" class="f-blue"/><circle cx="362.3" cy="211.6" r="1.9" class="f-blue"/><circle cx="374.5" cy="201.0" r="1.9" class="f-blue"/><circle cx="310.8" cy="49.4" r="1.9" class="f-blue"/><circle cx="381.1" cy="124.5" r="1.9" class="f-blue"/><circle cx="362.0" cy="175.7" r="1.9" class="f-blue"/><circle cx="350.8" cy="144.1" r="1.9" class="f-blue"/><circle cx="357.8" cy="159.7" r="1.9" class="f-blue"/><circle cx="354.7" cy="74.4" r="1.9" class="f-blue"/><circle cx="286.4" cy="69.7" r="1.9" class="f-blue"/><circle cx="387.8" cy="98.8" r="1.9" class="f-blue"/><circle cx="344.3" cy="68.7" r="1.9" class="f-blue"/><circle cx="341.6" cy="182.1" r="1.9" class="f-blue"/><circle cx="320.6" cy="196.2" r="1.9" class="f-blue"/><circle cx="426.7" cy="183.3" r="1.9" class="f-blue"/><circle cx="363.7" cy="197.9" r="1.9" class="f-blue"/><circle cx="325.2" cy="91.2" r="1.9" class="f-blue"/><circle cx="351.6" cy="48.4" r="1.9" class="f-blue"/><circle cx="337.3" cy="194.5" r="1.9" class="f-blue"/><circle cx="347.9" cy="136.0" r="1.9" class="f-blue"/><circle cx="385.6" cy="44.0" r="1.9" class="f-blue"/><circle cx="415.7" cy="103.1" r="1.9" class="f-blue"/><circle cx="422.9" cy="155.0" r="1.9" class="f-blue"/><circle cx="430.1" cy="151.7" r="1.9" class="f-blue"/><circle cx="364.5" cy="40.4" r="1.9" class="f-blue"/><circle cx="291.3" cy="119.9" r="1.9" class="f-blue"/><circle cx="297.0" cy="150.1" r="1.9" class="f-blue"/><circle cx="331.7" cy="86.5" r="1.9" class="f-blue"/><circle cx="364.4" cy="51.3" r="1.9" class="f-blue"/><circle cx="390.5" cy="132.3" r="1.9" class="f-blue"/><circle cx="424.0" cy="102.3" r="1.9" class="f-blue"/><circle cx="427.2" cy="99.9" r="1.9" class="f-blue"/><circle cx="287.6" cy="159.8" r="1.9" class="f-blue"/><circle cx="301.5" cy="129.3" r="1.9" class="f-blue"/><circle cx="358.1" cy="131.2" r="1.9" class="f-blue"/><circle cx="301.2" cy="81.9" r="1.9" class="f-blue"/><circle cx="372.0" cy="159.3" r="1.9" class="f-blue"/><circle cx="280.1" cy="100.4" r="1.9" class="f-blue"/><circle cx="408.8" cy="84.5" r="1.9" class="f-blue"/><circle cx="301.4" cy="115.7" r="1.9" class="f-blue"/><circle cx="402.2" cy="37.8" r="1.9" class="f-blue"/><circle cx="385.6" cy="171.8" r="1.9" class="f-blue"/><circle cx="401.7" cy="80.5" r="1.9" class="f-blue"/><circle cx="400.1" cy="157.2" r="1.9" class="f-blue"/><circle cx="375.2" cy="182.1" r="1.9" class="f-blue"/><circle cx="354.6" cy="89.5" r="1.9" class="f-blue"/><circle cx="337.5" cy="184.5" r="1.9" class="f-blue"/><circle cx="426.9" cy="180.0" r="1.9" class="f-blue"/><circle cx="420.9" cy="155.0" r="1.9" class="f-blue"/><circle cx="382.0" cy="39.1" r="1.9" class="f-blue"/><circle cx="451.7" cy="129.5" r="1.9" class="f-blue"/><circle cx="441.8" cy="148.2" r="1.9" class="f-blue"/><circle cx="437.2" cy="90.5" r="1.9" class="f-blue"/><circle cx="377.2" cy="34.1" r="1.9" class="f-blue"/><circle cx="300.9" cy="180.6" r="1.9" class="f-blue"/><circle cx="377.0" cy="162.8" r="1.9" class="f-blue"/><circle cx="404.3" cy="69.1" r="1.9" class="f-blue"/><circle cx="373.0" cy="63.9" r="1.9" class="f-blue"/><circle cx="336.2" cy="75.6" r="1.9" class="f-blue"/><circle cx="289.5" cy="104.4" r="1.9" class="f-blue"/><circle cx="307.1" cy="109.5" r="1.9" class="f-blue"/><circle cx="434.0" cy="107.7" r="1.9" class="f-blue"/><circle cx="288.2" cy="107.9" r="1.9" class="f-blue"/><circle cx="386.5" cy="133.5" r="1.9" class="f-blue"/><circle cx="416.3" cy="146.6" r="1.9" class="f-blue"/><circle cx="311.1" cy="84.5" r="1.9" class="f-blue"/><circle cx="351.3" cy="38.6" r="1.9" class="f-blue"/><circle cx="340.5" cy="97.7" r="1.9" class="f-blue"/><circle cx="358.2" cy="79.0" r="1.9" class="f-blue"/><circle cx="341.4" cy="183.4" r="1.9" class="f-blue"/><circle cx="318.3" cy="161.8" r="1.9" class="f-blue"/><circle cx="352.5" cy="195.1" r="1.9" class="f-blue"/><circle cx="321.8" cy="157.3" r="1.9" class="f-blue"/><circle cx="355.6" cy="160.0" r="1.9" class="f-blue"/><circle cx="406.3" cy="38.8" r="1.9" class="f-blue"/><circle cx="388.1" cy="155.6" r="1.9" class="f-blue"/><circle cx="369.5" cy="153.2" r="1.9" class="f-blue"/><circle cx="348.8" cy="69.0" r="1.9" class="f-blue"/><circle cx="315.6" cy="151.1" r="1.9" class="f-blue"/><circle cx="335.5" cy="155.9" r="1.9" class="f-blue"/><circle cx="428.7" cy="106.9" r="1.9" class="f-blue"/><circle cx="432.2" cy="61.1" r="1.9" class="f-blue"/><circle cx="366.5" cy="151.1" r="1.9" class="f-blue"/><circle cx="394.3" cy="168.7" r="1.9" class="f-blue"/><circle cx="282.4" cy="121.7" r="1.9" class="f-blue"/><circle cx="280.2" cy="77.9" r="1.9" class="f-blue"/><circle cx="305.8" cy="196.0" r="1.9" class="f-blue"/><circle cx="329.8" cy="98.4" r="1.9" class="f-blue"/><circle cx="329.6" cy="55.3" r="1.9" class="f-blue"/><circle cx="395.2" cy="36.1" r="1.9" class="f-blue"/><circle cx="361.1" cy="139.9" r="1.9" class="f-blue"/><circle cx="315.4" cy="60.4" r="1.9" class="f-blue"/><circle cx="397.0" cy="132.1" r="1.9" class="f-blue"/><circle cx="436.4" cy="151.0" r="1.9" class="f-blue"/><circle cx="446.5" cy="149.4" r="1.9" class="f-blue"/><circle cx="411.9" cy="164.5" r="1.9" class="f-blue"/><circle cx="361.8" cy="109.2" r="1.9" class="f-blue"/><circle cx="343.4" cy="135.5" r="1.9" class="f-blue"/><circle cx="298.8" cy="120.8" r="1.9" class="f-blue"/><circle cx="276.7" cy="144.6" r="1.9" class="f-blue"/><circle cx="372.3" cy="162.6" r="1.9" class="f-blue"/><circle cx="434.5" cy="140.0" r="1.9" class="f-blue"/><circle cx="385.1" cy="173.0" r="1.9" class="f-blue"/><circle cx="390.8" cy="80.0" r="1.9" class="f-blue"/><circle cx="317.9" cy="185.7" r="1.9" class="f-blue"/><circle cx="313.7" cy="143.3" r="1.9" class="f-blue"/><circle cx="354.8" cy="175.7" r="1.9" class="f-blue"/><circle cx="355.4" cy="35.0" r="1.9" class="f-blue"/><circle cx="340.3" cy="54.1" r="1.9" class="f-blue"/><circle cx="297.3" cy="174.1" r="1.9" class="f-blue"/><circle cx="291.8" cy="115.3" r="1.9" class="f-blue"/><circle cx="329.9" cy="141.1" r="1.9" class="f-blue"/><circle cx="303.3" cy="89.9" r="1.9" class="f-blue"/><circle cx="286.2" cy="68.8" r="1.9" class="f-blue"/><circle cx="296.9" cy="84.6" r="1.9" class="f-blue"/><circle cx="436.0" cy="63.9" r="1.9" class="f-blue"/><circle cx="363.1" cy="117.0" r="1.9" class="f-blue"/><circle cx="412.6" cy="135.6" r="1.9" class="f-blue"/><circle cx="299.4" cy="175.1" r="1.9" class="f-blue"/><circle cx="436.2" cy="137.7" r="1.9" class="f-blue"/><circle cx="309.8" cy="168.4" r="1.9" class="f-blue"/><circle cx="385.3" cy="44.9" r="1.9" class="f-blue"/><circle cx="321.9" cy="37.6" r="1.9" class="f-blue"/><circle cx="288.4" cy="85.8" r="1.9" class="f-blue"/><circle cx="420.2" cy="154.3" r="1.9" class="f-blue"/><circle cx="386.8" cy="52.0" r="1.9" class="f-blue"/><circle cx="301.0" cy="67.7" r="1.9" class="f-blue"/><circle cx="342.4" cy="169.1" r="1.9" class="f-blue"/><circle cx="377.1" cy="42.2" r="1.9" class="f-blue"/><circle cx="432.3" cy="136.1" r="1.9" class="f-blue"/><circle cx="392.2" cy="195.8" r="1.9" class="f-blue"/><circle cx="376.0" cy="54.1" r="1.9" class="f-blue"/><circle cx="375.0" cy="122.4" r="1.9" class="f-blue"/><circle cx="407.0" cy="169.4" r="1.9" class="f-blue"/><circle cx="272.0" cy="117.1" r="1.9" class="f-blue"/><circle cx="341.2" cy="44.4" r="1.9" class="f-blue"/><circle cx="295.5" cy="77.5" r="1.9" class="f-blue"/><circle cx="417.8" cy="131.7" r="1.9" class="f-blue"/><circle cx="351.2" cy="174.0" r="1.9" class="f-blue"/><circle cx="338.1" cy="40.5" r="1.9" class="f-blue"/><circle cx="344.6" cy="139.6" r="1.9" class="f-blue"/><circle cx="390.4" cy="201.1" r="1.9" class="f-blue"/><circle cx="448.9" cy="119.3" r="1.9" class="f-blue"/><circle cx="352.6" cy="210.9" r="1.9" class="f-blue"/><circle cx="391.7" cy="103.3" r="1.9" class="f-blue"/><circle cx="390.7" cy="127.9" r="1.9" class="f-blue"/><circle cx="275.1" cy="88.6" r="1.9" class="f-blue"/><circle cx="410.7" cy="85.7" r="1.9" class="f-blue"/><circle cx="344.9" cy="71.0" r="1.9" class="f-blue"/><circle cx="348.6" cy="175.6" r="1.9" class="f-blue"/><circle cx="314.1" cy="56.0" r="1.9" class="f-blue"/><circle cx="387.9" cy="144.0" r="1.9" class="f-blue"/><circle cx="293.7" cy="118.5" r="1.9" class="f-blue"/><circle cx="353.6" cy="194.9" r="1.9" class="f-blue"/><circle cx="417.3" cy="61.2" r="1.9" class="f-blue"/><circle cx="367.0" cy="110.2" r="1.9" class="f-blue"/><circle cx="366.4" cy="32.7" r="1.9" class="f-blue"/><circle cx="315.6" cy="162.1" r="1.9" class="f-blue"/><circle cx="378.2" cy="58.0" r="1.9" class="f-blue"/><circle cx="430.7" cy="109.0" r="1.9" class="f-blue"/><circle cx="325.7" cy="154.8" r="1.9" class="f-blue"/><circle cx="271.7" cy="103.9" r="1.9" class="f-blue"/><circle cx="382.9" cy="155.3" r="1.9" class="f-blue"/><circle cx="414.4" cy="162.0" r="1.9" class="f-blue"/><circle cx="352.7" cy="79.7" r="1.9" class="f-blue"/><circle cx="429.3" cy="145.6" r="1.9" class="f-blue"/><circle cx="287.5" cy="64.4" r="1.9" class="f-blue"/><circle cx="427.5" cy="176.4" r="1.9" class="f-blue"/><circle cx="343.0" cy="87.6" r="1.9" class="f-blue"/><circle cx="361.6" cy="42.9" r="1.9" class="f-blue"/><circle cx="443.6" cy="85.4" r="1.9" class="f-blue"/><circle cx="327.3" cy="145.1" r="1.9" class="f-blue"/><circle cx="313.0" cy="157.1" r="1.9" class="f-blue"/><circle cx="295.2" cy="165.3" r="1.9" class="f-blue"/><circle cx="337.6" cy="39.5" r="1.9" class="f-blue"/><circle cx="375.0" cy="56.0" r="1.9" class="f-blue"/><circle cx="416.7" cy="168.5" r="1.9" class="f-blue"/><circle cx="324.8" cy="187.3" r="1.9" class="f-blue"/><circle cx="413.1" cy="137.2" r="1.9" class="f-blue"/><circle cx="367.3" cy="194.4" r="1.9" class="f-blue"/><circle cx="352.6" cy="46.2" r="1.9" class="f-blue"/><circle cx="433.2" cy="87.3" r="1.9" class="f-blue"/><circle cx="427.4" cy="109.6" r="1.9" class="f-blue"/><circle cx="410.1" cy="140.9" r="1.9" class="f-blue"/><circle cx="308.9" cy="154.2" r="1.9" class="f-blue"/><circle cx="423.5" cy="52.5" r="1.9" class="f-blue"/><circle cx="318.9" cy="116.8" r="1.9" class="f-blue"/><circle cx="338.6" cy="147.7" r="1.9" class="f-blue"/><circle cx="362.1" cy="107.7" r="1.9" class="f-blue"/><circle cx="417.7" cy="52.0" r="1.9" class="f-blue"/><text x="360" y="236" text-anchor="middle" font-size="14">r = √U  (uniform)</text></svg>';

export const lesson: Lesson = {
  id: 'stat-continuous-rv',
  title: 'Densities, CDFs and Expectation by Integration',
  summary: 'When a random variable fills an interval — frame times, latency, loading times — single values have probability $0$ and probability becomes area under a density. Normalize densities, move between $f$ and $F$ with the fundamental theorem of calculus, compute means, variances and percentiles by integration, and find the distribution of a function of $X$.',
  minutes: 20,
  objectives: [
    'Explain why $P(X = x) = 0$ for a continuous random variable, and compute $P(a \\le X \\le b)$ as an integral of the density',
    'Find the constant that makes a function a valid density, including on infinite intervals',
    'Move between a density and its CDF using $F(x) = \\int_{-\\infty}^x f$ and $f = F\'$',
    'Compute $E[X]$, $E[g(X)]$ and $\\operatorname{Var}(X)$ by integration, and recognize when they are infinite',
    'Find medians and percentiles from the CDF, and the distribution of $Y = g(X)$ by the CDF method',
  ],
  steps: [
    // ------------------------------------------------------------------ 1
    {
      kind: 'concept',
      title: 'Probability as area',
      blocks: [
        {
          type: 'p',
          text: 'A loading screen takes $X$ seconds. Unlike a chest\'s item count, $X$ can be any real number in an interval: $1.7$, $1.73$, $1.7302\\ldots$ What is $P(X = 2)$, *exactly* two seconds, to infinitely many decimals?',
        },
        {
          type: 'p',
          text: 'It must be $0$. The event $X = 2$ sits inside $2 - h \\le X \\le 2 + h$ for every $h > 0$, so $P(X = 2) \\le P(2 - h \\le X \\le 2 + h)$. As the window shrinks to nothing, a sensible model must make that probability shrink to $0$ too. A random variable whose single values all have probability $0$, and whose probabilities are given by areas, is called **continuous**. The probability lives in *intervals*, measured by a density.',
        },
        {
          type: 'definition',
          term: 'Probability density function (PDF)',
          text: 'A continuous random variable $X$ has [[stat-pdf|density]] $f_X$ if for all $a \\le b$ $$P(a \\le X \\le b) = \\int_a^b f_X(x)\\,dx.$$ A density satisfies $f_X(x) \\ge 0$ and $\\int_{-\\infty}^{\\infty} f_X(x)\\,dx = 1$.',
        },
        {
          type: 'p',
          text: 'So a probability is the area under the density curve over an interval: a [[definite-integral|definite integral]]. Because single points have no area, $P(a \\le X \\le b) = P(a < X < b)$: unlike the discrete case, $<$ and $\\le$ give the same answer. Our model for the loading time is $f_X(x) = \\frac{3}{32}x(4 - x)$ for $0 \\le x \\le 4$, and $0$ elsewhere.',
        },
        {
          type: 'graph',
          x: [-0.5, 4.5],
          y: [0, 0.45],
          xStep: 0.5,
          yStep: 0.1,
          height: 270,
          functions: [{ expr: fLoad, domain: [0, 4], label: '$f_X(x) = \\frac{3}{32}x(4 - x)$' }],
          areas: [{ expr: fLoad, from: 'a', to: 'b', color: 'blue' }],
          sliders: [
            { name: 'a', min: 0, max: 4, step: 0.05, value: 1, label: 'left end $a$' },
            { name: 'b', min: 0, max: 4, step: 0.05, value: 2, label: 'right end $b$ (keep $b \\ge a$)' },
          ],
          readouts: [{ label: '$P(a \\le X \\le b) = \\int_a^b f_X =$', expr: `${FLoad('b')} - ${FLoad('a')}`, digits: 4 }],
          caption: 'The shaded area is the probability that loading takes between $a$ and $b$ seconds. Slide $b$ down onto $a$: the area — and so $P(X = a)$ — goes to $0$. The whole area under the curve is $1$.',
        },
        {
          type: 'derivation',
          title: 'Loading takes between 1 and 2 seconds',
          steps: [
            { tex: 'P(1 \\le X \\le 2) = \\int_1^2 \\tfrac{3}{32}\\left(4x - x^2\\right)dx', why: 'Probability is the integral of the density over the interval; expand $x(4 - x)$.' },
            { tex: '= \\tfrac{3}{32}\\left[2x^2 - \\tfrac{x^3}{3}\\right]_1^2', why: 'Antiderivative, term by term.' },
            { tex: '= \\tfrac{3}{32}\\left[\\left(8 - \\tfrac{8}{3}\\right) - \\left(2 - \\tfrac{1}{3}\\right)\\right] = \\tfrac{3}{32}\\cdot\\tfrac{11}{3} = \\tfrac{11}{32}', why: '[[fundamental-theorem-of-calculus|Fundamental theorem of calculus]]: evaluate at the limits and subtract.' },
          ],
          result: '$P(1 \\le X \\le 2) = \\frac{11}{32} \\approx 0.344$ — the value the readout shows for $a = 1$, $b = 2$.',
        },
      ],
    },
    // ------------------------------------------------------------------ 2
    {
      kind: 'numeric',
      prompt: 'For the loading-time density $f_X(x) = \\frac{3}{32}x(4 - x)$ on $[0, 4]$, find $P(X > 3)$, the chance of a loading screen longer than $3$ seconds. Exact fraction or four decimals.',
      hint: 'Integrate $\\frac{3}{32}(4x - x^2)$ from $3$ to $4$, using the antiderivative $\\frac{3}{32}\\left(2x^2 - \\frac{x^3}{3}\\right)$.',
      label: '$P(X > 3) =$',
      answer: '5/32',
      answerTex: '\\frac{5}{32} = 0.15625',
      minDecimals: 4,
      explanation: '$\\frac{3}{32}\\left[2x^2 - \\frac{x^3}{3}\\right]_3^4 = \\frac{3}{32}\\left[\\left(32 - \\frac{64}{3}\\right) - (18 - 9)\\right] = \\frac{3}{32}\\cdot\\frac{5}{3} = \\frac{5}{32} \\approx 0.1563$. By the symmetry of the density about $x = 2$, it equals $P(X < 1)$. And $P(X \\ge 3)$ would be the same number, since the single point $X = 3$ has probability $0$.',
    },
    // ------------------------------------------------------------------ 3
    {
      kind: 'concept',
      title: 'Densities are not probabilities; normalizing a density',
      blocks: [
        {
          type: 'p',
          text: 'A density value $f_X(x)$ is **probability per unit of $x$**, like mass per unit length of a rod: $P(x \\le X \\le x + \\Delta x) \\approx f_X(x)\\,\\Delta x$ for small $\\Delta x$. So a density can be larger than $1$ — if $X$ is squeezed into an interval of length $0.1$, its density must average $10$ there to give total area $1$. What can never exceed $1$ is an *area*.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Units check',
          text: 'If $X$ is in seconds, $f_X$ is in "probability per second". Change units to milliseconds and every density value is divided by $1000$ while every probability stays the same. That alone shows $f_X(x)$ cannot be a probability.',
        },
        {
          type: 'p',
          text: 'As with PMFs, a model is often known only up to a constant: "the density is proportional to $1 - x^2$ on $[-1, 1]$". The constant is forced by the total-area condition.',
        },
        {
          type: 'graph',
          x: [-1.5, 1.5],
          y: [0, 1.2],
          xStep: 0.5,
          yStep: 0.25,
          height: 250,
          functions: [{ expr: 'c*(1 - x^2)', domain: [-1, 1], label: '$f(x) = c(1 - x^2)$' }],
          areas: [{ expr: 'c*(1 - x^2)', from: -1, to: 1, color: 'teal' }],
          sliders: [{ name: 'c', min: 0.25, max: 1.2, step: 0.05, value: 0.5, label: 'constant $c$' }],
          readouts: [{ label: 'total area $= \\frac{4c}{3} =$', expr: '4c/3', digits: 3 }],
          caption: 'Only one value of $c$ makes the total area exactly $1$. Find it with the slider, then check the algebra below. (This density is the Epanechnikov kernel, used to smooth histograms in data science.)',
        },
        {
          type: 'derivation',
          title: 'Two normalizing constants',
          steps: [
            { tex: '\\int_{-1}^{1} c(1 - x^2)\\,dx = c\\left[x - \\tfrac{x^3}{3}\\right]_{-1}^{1} = c \\cdot \\tfrac{4}{3}', why: 'Total area of the unnormalized curve: $\\left(1 - \\frac{1}{3}\\right) - \\left(-1 + \\frac{1}{3}\\right) = \\frac{4}{3}$.' },
            { tex: 'c \\cdot \\tfrac{4}{3} = 1 \\implies c = \\tfrac{3}{4}', why: 'Set the total equal to $1$. Since $1 - x^2 \\ge 0$ on $[-1, 1]$, the density is also nonnegative.' },
            { tex: '\\int_{1}^{\\infty} \\frac{c}{x^3}\\,dx = \\lim_{R \\to \\infty} \\left[-\\frac{c}{2x^2}\\right]_1^R = \\frac{c}{2}', why: 'On an infinite interval the total is an [[improper-integral|improper integral]]: integrate to $R$ and let $R \\to \\infty$.' },
            { tex: '\\frac{c}{2} = 1 \\implies c = 2: \\quad f(x) = \\frac{2}{x^3}, \\ x \\ge 1', why: 'This is a **Pareto** density, a model for heavy-tailed quantities such as file sizes, wealth and the occasional huge latency spike.' },
          ],
          result: 'Not every shape can be normalized: $c/x$ on $[1, \\infty)$ has infinite area for every $c > 0$, so no constant works.',
        },
      ],
    },
    // ------------------------------------------------------------------ 4
    {
      kind: 'numeric',
      prompt: 'Find the constant $c$ that makes $f(x) = c\\sqrt{x}$ for $0 \\le x \\le 4$ (and $0$ elsewhere) a valid density. Exact fraction.',
      hint: '$\\int_0^4 \\sqrt{x}\\,dx = \\left[\\frac{2}{3}x^{3/2}\\right]_0^4$.',
      label: '$c =$',
      answer: '3/16',
      explanation: '$\\int_0^4 c\\,x^{1/2}\\,dx = c \\cdot \\frac{2}{3}\\cdot 4^{3/2} = c \\cdot \\frac{2}{3}\\cdot 8 = \\frac{16c}{3}$. Setting this to $1$ gives $c = \\frac{3}{16}$. Note that $f(4) = \\frac{3}{16}\\cdot 2 = 0.375$ — but with a narrower interval the peak could easily exceed $1$.',
    },
    // ------------------------------------------------------------------ 5
    {
      kind: 'truefalse',
      prompt: 'If a continuous random variable has density value $f_X(0.2) = 2.5$, the model must be wrong, because probabilities cannot exceed $1$.',
      answer: false,
      explanation: 'A density value is probability **per unit**, not a probability. For example, $f(x) = 5$ on $[0, 0.2]$ is a valid density: its total area is $5 \\times 0.2 = 1$. The constraints are $f \\ge 0$ and total area $1$; the value at a point can be any nonnegative number.',
    },
    // ------------------------------------------------------------------ 6
    {
      kind: 'concept',
      title: 'The CDF, and $f = F\'$',
      blocks: [
        {
          type: 'p',
          text: 'The CDF $F_X(x) = P(X \\le x)$ from the discrete lesson works unchanged: it is the area under the density to the left of $x$. Because accumulating area is exactly what an integral with a variable upper limit does, the fundamental theorem of calculus ties $F$ and $f$ together.',
        },
        {
          type: 'theorem',
          name: 'CDF and density',
          tex: 'F_X(x) = \\int_{-\\infty}^{x} f_X(u)\\,du, \\qquad f_X(x) = F_X\'(x) \\ \\text{(wherever } f_X \\text{ is continuous)}',
          text: 'For a continuous variable, $F_X$ is a continuous function — no jumps, because no single value carries probability — and $P(a \\le X \\le b) = F_X(b) - F_X(a)$.',
        },
        {
          type: 'graph',
          x: [-0.5, 4.5],
          y: [0, 1.1],
          xStep: 0.5,
          yStep: 0.25,
          height: 280,
          functions: [
            { expr: fLoad, domain: [0, 4], label: 'density $f_X$', color: 'blue' },
            { expr: '3x^2/16 - x^3/32', domain: [0, 4], label: 'CDF $F_X$', color: 'purple' },
            { expr: '0', domain: [-0.5, 0], color: 'purple' },
            { expr: '1', domain: [4, 4.5], color: 'purple' },
          ],
          areas: [{ expr: fLoad, from: 0, to: 's', color: 'blue' }],
          points: [{ x: 's', y: FLoad('s'), color: 'purple', label: '(s, F(s))' }],
          sliders: [{ name: 's', min: 0, max: 4, step: 0.05, value: 1.5, label: '$s$' }],
          readouts: [
            { label: 'shaded area $= F_X(s) =$', expr: FLoad('s'), digits: 4 },
            { label: 'slope of $F_X$ at $s$ $= f_X(s) =$', expr: '3/32*s*(4 - s)', digits: 4 },
          ],
          caption: 'The height of the purple CDF at $s$ equals the blue area to the left of $s$. The CDF climbs fastest where the density is tallest (at $x = 2$) and is flat where the density is $0$. Its slope at every point is the density.',
        },
        {
          type: 'derivation',
          title: 'The full CDF of the loading time',
          steps: [
            { tex: 'F_X(x) = \\int_0^x \\tfrac{3}{32}(4u - u^2)\\,du = \\tfrac{3}{32}\\left(2x^2 - \\tfrac{x^3}{3}\\right) = \\frac{3x^2}{16} - \\frac{x^3}{32}', why: 'For $0 \\le x \\le 4$: the density is $0$ below $0$, so the area starts accumulating at $0$.' },
            { tex: 'F_X(x) = \\begin{cases} 0 & x < 0 \\\\ \\dfrac{3x^2}{16} - \\dfrac{x^3}{32} & 0 \\le x \\le 4 \\\\ 1 & x > 4 \\end{cases}', why: 'Below the support no area has accumulated; above it, all of it. A CDF is defined for every real $x$, so write all three pieces.' },
            { tex: 'F_X\'(x) = \\frac{3x}{8} - \\frac{3x^2}{32} = \\tfrac{3}{32}x(4 - x) = f_X(x)', why: 'Check by differentiating: we recover the density, as the theorem promises.' },
          ],
          result: 'With $F_X$ in hand, any interval probability is one subtraction: $P(1 \\le X \\le 2) = F_X(2) - F_X(1) = \\frac{1}{2} - \\frac{5}{32} = \\frac{11}{32}$.',
        },
        {
          type: 'callout',
          variant: 'why',
          title: 'Why every continuous distribution has a CDF but not always a nice density',
          text: 'The CDF always exists — it is just a probability. The density is its derivative, and derivatives can fail to exist at corners (like the edges $x = 0$ and $x = 4$ here, where we may define $f$ either way). Changing $f$ at a few points changes no integral and therefore no probability, which is why such choices never matter.',
        },
      ],
    },
    // ------------------------------------------------------------------ 7
    {
      kind: 'expr',
      prompt: 'A server\'s response time $X$ (in units of $100$ ms) has CDF $F_X(x) = 1 - (1 + x)e^{-x}$ for $x \\ge 0$. Find its density $f_X(x)$ for $x > 0$.',
      hint: 'Differentiate. Use the product rule on $(1 + x)e^{-x}$.',
      label: '$f_X(x) =$',
      answer: 'x*e^(-x)',
      answerTex: 'x e^{-x}',
      domain: [0.1, 4],
      explanation: '$f_X = F_X\' = -\\left[e^{-x} + (1 + x)(-e^{-x})\\right] = -e^{-x} + (1 + x)e^{-x} = x e^{-x}$. Check: $x e^{-x} \\ge 0$ and $\\int_0^\\infty x e^{-x}\\,dx = 1$ (by [[integration-by-parts|integration by parts]]). This is a Gamma density, which you will meet in the next lesson as the waiting time for the second event of a Poisson process.',
    },
    // ------------------------------------------------------------------ 8
    {
      kind: 'concept',
      title: 'Expectation and variance by integration',
      blocks: [
        {
          type: 'p',
          text: 'Every discrete formula has a continuous twin: replace the PMF by the density and the sum by an integral. The mean is still the balance point, now of a continuous mass distribution — the same integral as the center of mass of a rod from Calculus II.',
        },
        {
          type: 'theorem',
          name: 'Expectation of a continuous random variable',
          tex: 'E[X] = \\int_{-\\infty}^{\\infty} x\\,f_X(x)\\,dx, \\qquad E[g(X)] = \\int_{-\\infty}^{\\infty} g(x)\\,f_X(x)\\,dx',
          text: 'The second formula is LOTUS for densities. The rules $E[aX + b] = aE[X] + b$, $\\operatorname{Var}(aX + b) = a^2\\operatorname{Var}(X)$ and $\\operatorname{Var}(X) = E[X^2] - (E[X])^2$ carry over unchanged, with the same proofs (integrals are linear too).',
        },
        {
          type: 'derivation',
          title: 'Mean and variance of the loading time',
          steps: [
            { tex: 'E[X] = \\int_0^4 x \\cdot \\tfrac{3}{32}(4x - x^2)\\,dx = \\tfrac{3}{32}\\left[\\tfrac{4x^3}{3} - \\tfrac{x^4}{4}\\right]_0^4 = \\tfrac{3}{32}\\cdot\\tfrac{64}{3} = 2', why: 'Multiply the density by $x$ and integrate. As the symmetry about $x = 2$ predicted.' },
            { tex: 'E[X^2] = \\tfrac{3}{32}\\int_0^4 (4x^3 - x^4)\\,dx = \\tfrac{3}{32}\\left[x^4 - \\tfrac{x^5}{5}\\right]_0^4 = \\tfrac{3}{32}\\cdot\\tfrac{256}{5} = \\tfrac{24}{5}', why: 'LOTUS with $g(x) = x^2$: $256 - \\frac{1024}{5} = \\frac{256}{5}$.' },
            { tex: '\\operatorname{Var}(X) = \\tfrac{24}{5} - 2^2 = \\tfrac{4}{5}, \\qquad \\sigma = \\sqrt{0.8} \\approx 0.894 \\text{ s}', why: 'Variance shortcut.' },
          ],
          result: 'Loading takes $2$ seconds on average, give or take about $0.9$ seconds.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Means and variances can be infinite',
          text: 'The integrals are improper whenever the support is unbounded, and they can diverge. For the Pareto density $f(x) = 2/x^3$ on $[1, \\infty)$: $E[X] = \\int_1^\\infty \\frac{2}{x^2}\\,dx = 2$, but $E[X^2] = \\int_1^\\infty \\frac{2}{x}\\,dx = \\infty$. The variance does not exist. Sample variances of such data never settle down, and averages converge painfully slowly — a real issue for latency and file-size telemetry, where a few enormous values dominate.',
        },
        {
          type: 'graph',
          x: [0, 40],
          y: [0, 2.2],
          xStep: 5,
          yStep: 0.5,
          height: 240,
          functions: [
            { expr: '2/x', domain: [1, 40], color: 'red', label: '$x^2 f(x) = 2/x$ (integrand of $E[X^2]$)' },
            { expr: '2/x^2', domain: [1, 40], color: 'blue', label: '$x f(x) = 2/x^2$ (integrand of $E[X]$)' },
          ],
          areas: [
            { expr: '2/x', from: 1, to: 'R', color: 'red' },
            { expr: '2/x^2', from: 1, to: 'R', color: 'blue' },
          ],
          sliders: [{ name: 'R', min: 2, max: 1000, step: 1, value: 10, label: 'upper limit $R$' }],
          readouts: [
            { label: '$\\int_1^R 2/x^2\\,dx = 2 - 2/R =$', expr: '2 - 2/R', digits: 4 },
            { label: '$\\int_1^R 2/x\\,dx = 2\\ln R =$', expr: '2ln(R)', digits: 3 },
          ],
          caption: 'For the Pareto density $2/x^3$: the blue area (giving $E[X]$) approaches $2$ as $R$ grows, while the red area (giving $E[X^2]$) grows like $2\\ln R$ forever. The tails decide whether a moment exists.',
        },
      ],
    },
    // ------------------------------------------------------------------ 9
    {
      kind: 'numeric',
      prompt: 'A random variable has density $f(x) = 3x^2$ on $[0, 1]$. Find $\\operatorname{Var}(X)$. Exact fraction or four decimals.',
      hint: 'Find $E[X] = \\int_0^1 3x^3\\,dx$ and $E[X^2] = \\int_0^1 3x^4\\,dx$, then use the shortcut.',
      label: '$\\operatorname{Var}(X) =$',
      answer: '3/80',
      answerTex: '\\frac{3}{80} = 0.0375',
      minDecimals: 4,
      explanation: '$E[X] = \\int_0^1 3x^3\\,dx = \\frac{3}{4}$ and $E[X^2] = \\int_0^1 3x^4\\,dx = \\frac{3}{5}$. So $\\operatorname{Var}(X) = \\frac{3}{5} - \\frac{9}{16} = \\frac{48 - 45}{80} = \\frac{3}{80} = 0.0375$, and $\\sigma \\approx 0.194$. A common slip is to compute $\\int_0^1 x^2 \\cdot 3x^2\\,dx$ correctly but then subtract $\\frac{3}{4}$ instead of $\\left(\\frac{3}{4}\\right)^2$.',
    },
    // ------------------------------------------------------------------ 10
    {
      kind: 'mcq',
      prompt: 'For the Pareto density $f(x) = \\dfrac{2}{x^3}$ for $x \\ge 1$, which statement is correct?',
      options: [
        { text: 'Mean $2$, variance $2$', why: 'The mean is right, but $E[X^2] = \\int_1^\\infty 2/x\\,dx$ diverges, so there is no finite variance to compute.' },
        { text: 'It is not a valid density, because its support is infinite', why: 'Infinite support is fine as long as the improper integral of $f$ equals $1$: $\\int_1^\\infty 2x^{-3}\\,dx = 1$.' },
        { text: 'The mean is infinite, because the support is infinite', why: '$E[X] = \\int_1^\\infty 2x^{-2}\\,dx = 2$ converges. Whether a moment exists depends on how fast the tail decays, not on the support being infinite.' },
        { text: 'Mean $2$, but the variance is infinite', correct: true, why: '$\\int_1^\\infty x \\cdot 2x^{-3}\\,dx = 2$ converges ($p$-integral with $p = 2$), but $\\int_1^\\infty x^2 \\cdot 2x^{-3}\\,dx = \\int_1^\\infty 2/x\\,dx$ diverges ($p = 1$).' },
      ],
      explanation: 'Moments are improper integrals, and the [[p-integral|$p$-integral]] test decides them: $\\int_1^\\infty x^{-p}\\,dx$ converges exactly when $p > 1$. Here $x f(x) = 2x^{-2}$ ($p = 2$, converges to $2$) but $x^2 f(x) = 2x^{-1}$ ($p = 1$, diverges). Heavy-tailed data can have a perfectly good mean and no variance at all.',
    },
    // ------------------------------------------------------------------ 11
    {
      kind: 'concept',
      title: 'Medians and percentiles from the CDF',
      blocks: [
        {
          type: 'p',
          text: 'The mean is not the only "center". The **median** $m$ splits the probability in half, and more generally the $100p$-th **percentile** (or $p$-quantile) $x_p$ has fraction $p$ of the probability below it. For a continuous variable with an increasing CDF, you find it by solving one equation.',
        },
        {
          type: 'theorem',
          name: 'Percentiles',
          tex: 'F_X(x_p) = p, \\qquad \\text{median: } F_X(m) = \\tfrac{1}{2}',
        },
        {
          type: 'derivation',
          title: 'Median and 95th percentile of the Pareto latency model',
          steps: [
            { tex: 'F(x) = \\int_1^x \\frac{2}{u^3}\\,du = 1 - \\frac{1}{x^2}, \\quad x \\ge 1', why: 'CDF of the Pareto density from before.' },
            { tex: '1 - \\frac{1}{m^2} = \\frac{1}{2} \\implies m^2 = 2 \\implies m = \\sqrt{2} \\approx 1.41', why: 'Median: set $F(m) = \\frac{1}{2}$ and solve; take the positive root since $m \\ge 1$.' },
            { tex: '1 - \\frac{1}{x^2} = 0.95 \\implies x^2 = 20 \\implies x_{0.95} = \\sqrt{20} \\approx 4.47', why: '95th percentile: same equation with $p = 0.95$.' },
          ],
          result: 'Median $1.41$, mean $2$, 95th percentile $4.47$ (in units of, say, $10$ ms). The long right tail pulls the mean above the median, just as skewness predicted in the discrete lesson.',
        },
        {
          type: 'graph',
          x: [0, 12],
          y: [0, 1.1],
          xStep: 1,
          yStep: 0.25,
          height: 250,
          functions: [{ expr: '1 - 1/x^2', domain: [1, 12], color: 'purple', label: '$F(x) = 1 - 1/x^2$' }, { expr: '0', domain: [0, 1], color: 'purple' }],
          hlines: [{ y: 'q', label: 'p', color: 'gray' }],
          vlines: [{ x: '1/sqrt(1 - q)', label: 'x_p', color: 'orange' }],
          points: [{ x: '1/sqrt(1 - q)', y: 'q', color: 'orange' }],
          sliders: [{ name: 'q', min: 0.05, max: 0.99, step: 0.01, value: 0.5, label: 'probability $p$' }],
          readouts: [{ label: 'percentile $x_p = 1/\\sqrt{1 - p} =$', expr: '1/sqrt(1 - q)', digits: 3 }],
          caption: 'To find a percentile, go across from height $p$ to the CDF, then down to the axis: you are evaluating the inverse function $F^{-1}(p)$. Push $p$ toward $0.99$ and watch the percentile run away — the signature of a heavy tail.',
        },
        {
          type: 'callout',
          variant: 'code',
          title: 'p95 and p99 frame times',
          text: 'Performance teams report frame-time **percentiles**, not just the mean: "p99 = 24 ms" means $1\\%$ of frames take longer than $24$ ms. A game averaging $16.7$ ms ($60$ fps) can still stutter badly if its tail is heavy, and the mean hides that while a high percentile exposes it. Computing $F^{-1}(p)$ is also how games turn uniform random numbers into any distribution (inverse-transform sampling, in the Simulation lesson).',
        },
      ],
    },
    // ------------------------------------------------------------------ 12
    {
      kind: 'numeric',
      prompt: 'A random variable has density $f(x) = 3x^2$ on $[0, 1]$. Find its median. Four decimals.',
      hint: 'First find $F(x) = \\int_0^x 3u^2\\,du$, then solve $F(m) = 0.5$.',
      label: '$m =$',
      answer: '0.5^(1/3)',
      answerTex: '\\sqrt[3]{0.5} \\approx 0.7937',
      tolerance: 0.00006,
      explanation: '$F(x) = x^3$ on $[0, 1]$, so $m^3 = \\frac{1}{2}$ and $m = 2^{-1/3} \\approx 0.7937$. The median sits slightly above the mean $\\frac{3}{4}$: this density leans right, so its long tail points *left* (toward $0$), pulling the mean below the median.',
    },
    // ------------------------------------------------------------------ 13
    {
      kind: 'concept',
      title: 'Functions of a random variable: the CDF method',
      blocks: [
        {
          type: 'p',
          text: 'If $X$ has a known density and $Y = g(X)$, what is the density of $Y$? You cannot just substitute into $f_X$: densities are "per unit", and $g$ stretches some units and squeezes others. The reliable route goes through the CDF, which *is* a probability.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Write the CDF of $Y$ as a probability about $X$', text: '$F_Y(y) = P(g(X) \\le y)$.' },
            { title: 'Solve the inequality for $X$', text: 'For increasing $g$: $P(X \\le g^{-1}(y)) = F_X(g^{-1}(y))$. (A decreasing $g$ flips the inequality.)' },
            { title: 'Differentiate', text: '$f_Y(y) = F_Y\'(y)$, using the chain rule. Note the range of possible $y$ values.' },
          ],
        },
        {
          type: 'p',
          text: 'Here is a game-programming classic. To spawn loot at a uniformly random point in a circular area of radius $1$, you pick an angle uniformly and a distance $R$ from the center. "Uniform over the disk" means the probability of landing within distance $r$ is the area fraction: $P(R \\le r) = \\pi r^2/\\pi = r^2$. Choosing $R$ uniform on $[0, 1]$ gives the wrong answer.',
        },
        {
          type: 'figure',
          svg: DISK_SVG,
          alt: 'Two disks with 260 random points each. Left, radius chosen uniformly: points crowd the center, with about half inside the dashed half-radius circle. Right, radius equal to the square root of a uniform number: points are evenly spread, with about a quarter inside the dashed circle.',
          caption: 'Left: $R = U$ crowds points toward the center — half land inside the dashed circle of radius $\\frac{1}{2}$, which holds only a quarter of the area. Right: $R = \\sqrt{U}$ spreads them evenly.',
          maxWidth: 460,
        },
        {
          type: 'derivation',
          title: 'Why $R = \\sqrt{U}$ works ($U$ uniform on $[0, 1]$, so $P(U \\le u) = u$)',
          steps: [
            { tex: 'F_R(r) = P(\\sqrt{U} \\le r) = P(U \\le r^2)', why: 'Step 1 and 2: for $0 \\le r \\le 1$, square both sides; squaring is increasing on nonnegative numbers, so the inequality keeps its direction.' },
            { tex: '= r^2', why: 'A uniform number on $[0, 1]$ lands below $r^2$ with probability $r^2$.' },
            { tex: 'f_R(r) = \\frac{d}{dr}\\,r^2 = 2r, \\quad 0 \\le r \\le 1', why: 'Step 3: differentiate the CDF. $F_R(r) = r^2$ is exactly the area fraction we wanted.' },
          ],
          result: 'The density $2r$ grows with $r$ because a ring at distance $r$ has circumference proportional to $r$: outer rings need more points. In general, for increasing $g$, $f_Y(y) = f_X(g^{-1}(y))\\cdot\\frac{d}{dy}g^{-1}(y)$ — the derivative factor is the stretching that substitution alone forgets.',
        },
        {
          type: 'code',
          title: 'continuous_check.cpp',
          runnable: true,
          code: `#include <cmath>
#include <cstdio>
#include <random>

// Loading-time density from the lesson: f(x) = (3/32) x (4 - x) on [0, 4].
double f(double x) { return 3.0 / 32.0 * x * (4.0 - x); }

// Composite Simpson's rule for the integral of g over [a, b] with n (even) panels.
template <class G>
double simpson(G g, double a, double b, int n) {
    double h = (b - a) / n, sum = g(a) + g(b);
    for (int i = 1; i < n; ++i) sum += g(a + i * h) * (i % 2 ? 4 : 2);
    return sum * h / 3;
}

std::mt19937_64 rng(5);
double uniform01() { return (rng() >> 11) * 0x1.0p-53; }   // uniform in [0, 1)

int main() {
    // 1. Moments by numerical integration.
    double area = simpson(f, 0, 4, 1000);
    double mean = simpson([](double x) { return x * f(x); }, 0, 4, 1000);
    double ex2 = simpson([](double x) { return x * x * f(x); }, 0, 4, 1000);
    std::printf("area %.6f   E[X] %.6f   Var(X) %.6f\\n", area, mean, ex2 - mean * mean);

    // 2. Random points in a disk of radius 1: radius U (wrong) versus sqrt(U).
    const int N = 1'000'000;
    int naiveInner = 0, inner = 0;
    double sumR = 0;
    for (int i = 0; i < N; ++i) {
        double u = uniform01();
        double r = std::sqrt(u);              // R has CDF r^2, density 2r
        if (u <= 0.5) ++naiveInner;           // naive radius would be u itself
        if (r <= 0.5) ++inner;
        sumR += r;
    }
    std::printf("P(R <= 1/2): naive %.4f   sqrt %.4f   (area fraction 0.25)\\n",
                double(naiveInner) / N, double(inner) / N);
    std::printf("E[R] %.4f   (exact 2/3)\\n", sumR / N);
}`,
          output: `area 1.000000   E[X] 2.000000   Var(X) 0.800000
P(R <= 1/2): naive 0.4997   sqrt 0.2501   (area fraction 0.25)
E[R] 0.6667   (exact 2/3)`,
          annotations: [
            { lines: '9-14', text: 'Simpson\'s rule from Calculus II: exact for cubics and extremely accurate for these smooth integrands, so the printed moments match $1$, $2$ and $\\frac{4}{5}$.' },
            { lines: '21-23', text: 'Normalization, $E[X] = \\int x f$ and $E[X^2] = \\int x^2 f$ (LOTUS), all as numerical integrals.' },
            { lines: 32, text: 'The CDF method in code: $\\sqrt{U}$ has CDF $r^2$, the area fraction of the disk.' },
            { lines: 39, text: '$E[R] = \\int_0^1 r \\cdot 2r\\,dr = \\frac{2}{3}$: the average spawn is two-thirds of the way out, not halfway.' },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------ 14
    {
      kind: 'error',
      prompt: '$X$ has density $f_X(x) = 2x$ on $[0, 1]$, so $F_X(x) = x^2$. A student finds the density of $Y = \\sqrt{X}$. Tap the first wrong line.',
      lines: [
        'For $0 \\le y \\le 1$: $F_Y(y) = P(\\sqrt{X} \\le y) = P(X \\le y^2)$.',
        'So $F_Y(y) = F_X(y^2)$.',
        'Differentiating, $f_Y(y) = f_X(y^2) = 2y^2$.',
        'So $Y$ has density $2y^2$ on $[0, 1]$.',
      ],
      errorLines: [3],
      explanation: 'Line 3 forgets the chain rule. $\\frac{d}{dy}F_X(y^2) = f_X(y^2)\\cdot 2y = 2y^2 \\cdot 2y = 4y^3$. (Directly: $F_Y(y) = (y^2)^2 = y^4$, so $f_Y = 4y^3$.) A quick check catches the slip: $\\int_0^1 2y^2\\,dy = \\frac{2}{3} \\ne 1$, so $2y^2$ is not even a density, while $\\int_0^1 4y^3\\,dy = 1$.',
    },
    // ------------------------------------------------------------------ 15
    {
      kind: 'order',
      prompt: 'Put the steps of the CDF method for finding the density of $Y = g(X)$ (with $g$ increasing) in order.',
      lines: [
        'Write $F_Y(y) = P(g(X) \\le y)$',
        'Rewrite the event as $X \\le g^{-1}(y)$',
        'Express it with the CDF of $X$: $F_Y(y) = F_X(g^{-1}(y))$',
        'Differentiate with the chain rule to get $f_Y(y)$',
        'State the range of $y$ and check that $f_Y$ integrates to $1$',
      ],
      distractors: ['Substitute $g^{-1}(y)$ into $f_X$ and stop'],
      explanation: 'Work with probabilities first (CDFs), because probabilities do not depend on units; only then differentiate. The distractor — plugging into the density — skips the derivative of $g^{-1}$, the stretching factor, and usually produces something that does not integrate to $1$. The final check catches exactly that mistake.',
    },
  ],
  takeaways: [
    'For a continuous random variable, $P(X = x) = 0$ and $P(a \\le X \\le b) = \\int_a^b f_X(x)\\,dx$; $<$ and $\\le$ give the same probabilities.',
    'A density satisfies $f \\ge 0$ and $\\int f = 1$; its values are probability per unit and may exceed $1$. Normalize a density by integrating (improperly, if the support is infinite).',
    '$F_X(x) = \\int_{-\\infty}^x f_X$ is continuous, and $f_X = F_X\'$ by the fundamental theorem of calculus; $P(a \\le X \\le b) = F_X(b) - F_X(a)$.',
    '$E[X] = \\int x f$, $E[g(X)] = \\int g f$, $\\operatorname{Var}(X) = E[X^2] - (E[X])^2$ — and with heavy tails these integrals can diverge (Pareto $2/x^3$: mean $2$, infinite variance).',
    'Percentiles solve $F_X(x_p) = p$. For $Y = g(X)$, find $F_Y$ through a probability about $X$, then differentiate (the chain-rule factor is essential): uniform points in a disk need $R = \\sqrt{U}$.',
  ],
  reading: [
    {
      title: 'MIT OCW 18.05 — Introduction to Probability and Statistics',
      url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/',
      source: 'other',
      note: 'The class notes on continuous random variables and on expectation by integration match this lesson closely and include many practice problems.',
    },
    {
      title: 'OpenStax — Introductory Statistics',
      url: 'https://openstax.org/details/books/introductory-statistics',
      source: 'openstax',
      note: 'The continuous random variables chapter explains probability as area under a density with many pictures.',
    },
    {
      title: 'Wikipedia — Probability density function',
      url: 'https://en.wikipedia.org/wiki/Probability_density_function',
      source: 'wikipedia',
      note: 'Formal definitions, the link to the CDF, and the change-of-variables formula for functions of a random variable.',
    },
    {
      title: 'Wikipedia — Pareto distribution',
      url: 'https://en.wikipedia.org/wiki/Pareto_distribution',
      source: 'wikipedia',
      note: 'The heavy-tailed family behind the $2/x^3$ example: when its moments exist and where it appears in practice.',
    },
  ],
};
