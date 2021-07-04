package io.github.dougllasfps.vendasapi.util;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import org.springframework.util.StringUtils;

public class DateUtils {
	
	private static final String PADRAO_FORMATACAO_DATA = "dd/MM/yyyy";
	public static final Date DATA_INICIO_PADRAO;
	
	static {
		DATA_INICIO_PADRAO = DateUtils.fromString("01/01/1970");
	}
	
	public static Date fromString(String dataString) {
		return fromString(dataString, false);
	}

	public static Date fromString(String dataString, boolean atEndOfDay) {
		if(!StringUtils.hasText(dataString)) {
			return null;
		}
		var data = LocalDate.parse(dataString, DateTimeFormatter.ofPattern(PADRAO_FORMATACAO_DATA));
		LocalDateTime dataHora;
		if(atEndOfDay) {
			dataHora = data.atTime(LocalTime.of(23, 59));
		}else {
			dataHora = data.atStartOfDay();
		}
		var instant = dataHora.atZone(ZoneId.systemDefault()).toInstant();
		return Date.from(instant);
	}

	public static Date hoje(boolean atEndOfDay) {
		String dataHojeFormatada = LocalDate.now().format(DateTimeFormatter.ofPattern(PADRAO_FORMATACAO_DATA));
		return fromString(dataHojeFormatada, atEndOfDay);
	}
}
